import PageNavItem from './PagesNavItem';

export default function PagesNav() {
    return (
        <div className="col-span-full grid gap-4">
            <PageNavItem title="posty" />
            <PageNavItem asyncMode title="czasopisma" />
        </div>
    );
}
