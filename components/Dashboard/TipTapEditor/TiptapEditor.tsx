'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';

import Toolbar from './Toolbar';

export default function TiptapEditor(props: {
    description: string;
    content?: string;
    onChange: (richText: string) => void;
}) {
    const editor = useEditor({
        immediatelyRender: false,
        content: props.content,
        extensions: [
            StarterKit.configure({
                heading: {
                    HTMLAttributes: {
                        class: 'text-lg font-bold text-left',
                        level: [3],
                    },
                },
                paragraph: {
                    HTMLAttributes: {
                        class: 'text-left',
                    },
                },
            }),
            Placeholder.configure({
                placeholder: 'Napisz post...',
                showOnlyCurrent: false,
                showOnlyWhenEditable: false,
            }),
        ],
        editorProps: {
            attributes: {
                class: 'rounded border h-[150px] border-input overflow-y-auto py-2 px-3',
            },
        },
        onUpdate({ editor }) {
            props.onChange(editor.getHTML());
        },
    });

    return (
        <div>
            <Toolbar editor={editor} />
            <EditorContent editor={editor} />
        </div>
    );
}
