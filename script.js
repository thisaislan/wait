(function() {
    "use strict";

    // ----- DOM refs -----
    const viewCopy = document.getElementById('view-copy');
    const viewMsg = document.getElementById('view-message');
    const linkInput = document.getElementById('linkInput');
    const copyBtn = document.getElementById('copyBtn');
    const copyStatus = document.getElementById('copyStatus');
    const msgText = document.getElementById('msgText');
    const msgTime = document.getElementById('msgTime');
    const langBtns = document.querySelectorAll('.lang-btn');
    const mainTitle = document.getElementById('mainTitle');
    const createLink = document.getElementById('createLink');

    const BASE_URL = window.location.origin + window.location.pathname;

    // ----- encoding / decoding (base26) -----
    function encodeTimestamp(ts) {
        if (ts === 0) return 'A';
        let num = BigInt(ts);
        const base = 26n;
        let chars = [];
        while (num > 0n) {
            const rem = Number(num % base);
            chars.push(String.fromCharCode(65 + rem));
            num = num / base;
        }
        return chars.reverse().join('');
    }

    function decodeTimestamp(str) {
        let val = 0n;
        const base = 26n;
        for (let i = 0; i < str.length; i++) {
            const code = str.charCodeAt(i) - 65;
            if (code < 0 || code > 25) return null;
            val = val * base + BigInt(code);
        }
        return Number(val);
    }

    // ----- build link -----
    function buildLink() {
        const now = Date.now();
        const code = encodeTimestamp(now);
        return `${BASE_URL}?${code}`;
    }

    // ----- copy to clipboard -----
    function copyLink() {
        const link = linkInput.value;
        if (!link) return;
        navigator.clipboard.writeText(link).then(() => {
            copyStatus.textContent = '✅ Copied!';
            copyStatus.style.color = '#57f287';
            setTimeout(() => { copyStatus.textContent = ''; }, 3000);
        }).catch(() => {
            linkInput.select();
            document.execCommand('copy');
            copyStatus.textContent = '✅ Copied (fallback)';
            copyStatus.style.color = '#57f287';
            setTimeout(() => { copyStatus.textContent = ''; }, 3000);
        });
    }

    // ----- language state -----
    let currentLang = navigator.language.startsWith('pt') ? 'pt' : 'en';
    let cachedElapsedSeconds = 0;
    let isInvalidLink = false;
    let invalidMessage = ''; // fixed message for invalid link

    // ----- render message from URL -----
    function renderMessageFromUrl() {
        const params = new URLSearchParams(window.location.search);
        const allKeys = Array.from(params.keys())
        const code = allKeys.length > 0 ? allKeys[0] : null;

        if (!code) {
            viewCopy.style.display = 'block';
            createLink.style.display = 'none';
            viewMsg.style.display = 'none';
            linkInput.value = buildLink();
            updateCopyViewUI();
            return false;
        }

        const timestamp = decodeTimestamp(code);
        const now = Date.now();

        if (timestamp === null || isNaN(timestamp) || timestamp <= 0) {
            isInvalidLink = true;
            const funnyMessages = [
                "You broke the space-time continuum!",
                "That link is from another dimension.",
                "Are you sure you didn't make this up?",
                "The link has expired… in a parallel universe.",
                "Wait, what? This isn't a valid timestamp.",
                "You found a glitch in the matrix.",
                "This link is like a unicorn – it doesn't exist.",
                "I think you typed it wrong, but here's a prize: 🎉",
                "The link is as real as my will to live.",
                "Congratulations, you've discovered the void."
            ];
            const randomIdx = Math.floor(Math.random() * funnyMessages.length);
            invalidMessage = funnyMessages[randomIdx];
            cachedElapsedSeconds = 0;
        } else {
            isInvalidLink = false;
            cachedElapsedSeconds = Math.max(0, Math.floor((now - timestamp) / 1000));
            invalidMessage = '';
        }

        viewCopy.style.display = 'none';
        viewMsg.style.display = 'block';
        createLink.style.display = 'block';
        updateMessageView();
        return true;
    }

    // ----- update message view (localized time each time) -----
    function updateMessageView() {
        if (isInvalidLink) {
            msgText.textContent = invalidMessage;
            // keep placeholder in English
            msgTime.textContent = `⏱ ?? days ?? hours ?? minutes ?? seconds`;
            return;
        }

        const message = getMessage(currentLang, cachedElapsedSeconds);
        const timeDisplay = formatElapsed(cachedElapsedSeconds, currentLang);
        msgText.textContent = message;
        msgTime.textContent = `⏱ ${timeDisplay}`;
    }

    // ----- update copy view UI (localized) -----
    function updateCopyViewUI() {
        const ui = UI[currentLang] || UI.en;
        mainTitle.innerHTML = ui.title;
        copyBtn.textContent = ui.copyButton;
        createLink.textContent = ui.createLink;
    }

    // ----- set language -----
    function setLang(lang) {
        currentLang = lang;
        createLink.textContent = (UI[currentLang] || UI.en).createLink;
        langBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        if (viewMsg.style.display !== 'none') {
            updateMessageView();
        } else {
            updateCopyViewUI();
    }
    }

    // ----- init -----
    function init() {
        setLang(currentLang);
        linkInput.value = buildLink();

        copyBtn.addEventListener('click', function() {
            linkInput.value = buildLink();
            copyLink();
        });

        langBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                const lang = this.dataset.lang;
                setLang(lang);
            });
        });

        const hasMessage = renderMessageFromUrl();
        if (!hasMessage) {
            viewCopy.style.display = 'block';
            viewMsg.style.display = 'none';
            linkInput.value = buildLink();
            updateCopyViewUI();
        }

        window.addEventListener('popstate', function() {
            const hasMsg = renderMessageFromUrl();
            if (!hasMsg) {
                viewCopy.style.display = 'block';
                viewMsg.style.display = 'none';
                linkInput.value = buildLink();
                updateCopyViewUI();
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();