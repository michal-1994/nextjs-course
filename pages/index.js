import MeetupList from '../components/meetups/MeetupList';

const DUMMY_LIST = [
    {
        id: 'm1',
        title: 'First meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup',
    },
    {
        id: 'm2',
        title: 'Second meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some address 10, 12345 Some City',
        description: 'This is a second meetup',
    },
];

function HomePage() {
    return (
        <MeetupList meetups={DUMMY_LIST} />
    );
}

export default HomePage;