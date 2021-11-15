import Link from 'next/link';
import { Fragment } from 'react';

function NewsPage() {
    return (
        <Fragment>
            <h1>The News Page</h1>
            <ul>
                <li>
                    <Link href="/news/nextjs-is-a-great-framework-1">
                        Next Js is a great
                    </Link>
                </li>
                <li>
                    <Link href="/news/nextjs-is-a-great-framework-2">
                        Next Js is awesome
                    </Link>
                </li>
            </ul>
        </Fragment>
    );
}

export default NewsPage;