import { type Editor } from '@tiptap/react';
import { Bold, Italic, Heading3 } from 'lucide-react';
import { Toggle } from '../../UI/toggle';

export default function Toolbar(props: { editor: Editor | null }) {
    if (!props.editor) {
        return;
    }

    return (
        <div>
            <Toggle
                size="sm"
                pressed={props.editor.isActive('heading')}
                onPressedChange={() =>
                    props.editor
                        .chain()
                        .focus()
                        .toggleHeading({ level: 3 })
                        .run()
                }
            >
                <Heading3 className="h-4 w-4" />
            </Toggle>
        </div>
    );
}
