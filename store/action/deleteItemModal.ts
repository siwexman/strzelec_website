import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export function deleteItemModal(
    router: AppRouterInstance,
    id: number,
    content: string,
    handleDeleteItem: (id: number) => Promise<{ message: string } | undefined>,
    handleOpenModal: (
        type: string,
        message?: string,
        onConfirm?: () => void
    ) => void
) {
    async function handleDelete() {
        await handleDeleteItem(id);
        router.refresh();
    }

    handleOpenModal('confirm', content, handleDelete);
}
