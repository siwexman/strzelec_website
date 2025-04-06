export function preventSingleCharacters(text: string) {
    const regex = /\b([aAiIoOuUwWzZ])\s\b/g;

    return text.replace(regex, '$1\u00A0');
}
