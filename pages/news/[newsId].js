import { useRouter } from 'next/router';

function DetailPage() {
    const router = useRouter();

    const newsId = router.query.newsId;

    console.log(newsId);

    // send a request to the backand appliedUpdate to fetch the news item with newsId

    return (
        <h1>The News DetailPage</h1>
    );
}

export default DetailPage;