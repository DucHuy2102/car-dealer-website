import parse from 'html-react-parser';
import sanitizeHTML from 'sanitize-html';

export const HTMLParser = ({ html }: { html: string }) => {
    return parse(sanitizeHTML(html));
};
