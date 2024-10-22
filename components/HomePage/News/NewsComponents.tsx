import NewsItem from './NewsItem';

export default function NewsComponents() {
    return (
        <div className="flex justify-between gap-4 py-4">
            <NewsItem />
            <NewsItem />
            <NewsItem />
        </div>
    );
}
