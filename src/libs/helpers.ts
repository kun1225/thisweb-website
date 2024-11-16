import sanitizeHtml from 'sanitize-html';

export function hasObjectValue(obj: { [key: string]: any }) {
  if (typeof obj !== 'object' || obj === null) {
    return false;
  }

  const keys = Object.keys(obj);
  if (keys.length === 0) {
    return true;
  }

  for (const key of keys) {
    const value = obj[key];
    if (typeof value === 'object' && value !== null) {
      if (hasObjectValue(value)) {
        return true;
      }
    } else if (value !== undefined && value !== null && value !== '') {
      return true;
    }
  }

  return false;
}

export function hasArrayValue(array: any[]) {
  return Array.isArray(array) && array.length > 0;
}

// usage: <p dangerouslySetInnerHTML={{ __html: formatBrNewLine(text) }}/>
export function formatBrNewLine(text: string) {
  return sanitizeHtml(text.replace(/\n/g, '<br>'), {
    allowedTags: ['br'],
    allowedAttributes: {},
  });
}
