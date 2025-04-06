import PageNavItem from './PagesNavItem';

export default function PagesNav() {
    return (
        <div className="grid gap-4 grid-cols-1 grid-rows-2 col-span-full md:grid-rows-1 md:grid-cols-2">
            <PageNavItem title="posty" />
            <PageNavItem asyncMode title="czasopisma" />
        </div>
    );
}
