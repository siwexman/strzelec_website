export function getPaginationPages(current: number, total: number) {
    const pagination = [];

    pagination.push(1);

    if (current > 2) {
        pagination.push(current - 1);
    }

    if (current !== 1 || current !== total) {
        pagination.push(current);
    }

    if (current < total - 1) {
        pagination.push(current + 1);
    }

    if (total > 1) {
        pagination.push(total);
    }

    const sortedPagination = [...new Set(pagination)];

    const result: (string | number)[] = [];
    sortedPagination.forEach((page, index, array) => {
        if (index > 0 && page - array[index - 1] > 1) {
            result.push('...');
        }
        result.push(page);
    });

    return result;
}
