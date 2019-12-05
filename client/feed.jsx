/* eslint-disable import/extensions */
import React from 'react';
import Review from './review.jsx';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.data = [
      {
        id: 4,
        review_id: 'sp87vni4o9bimcu5idnh0d',
        business_id: 'o3fu9nk0hspmvrcp13jw92',
        user: 'Carey',
        stars: 3,
        date: '2017-04-05',
        text: 'Quo consequatur eos aut libero. Quos exercitationem beatae necessitatibus. Sequi odio dignissimos iste atque consequuntur. Unde animi perferendis eum.\n \rNatus unde voluptatum dolore hic repellendus debitis voluptatem. Ipsam est doloremque. Sit repudiandae sed necessitatibus illum a non repellat. Commodi illum eaque aut magnam est. Quia ut dolorem dolor nostrum odit. Alias numquam fugit porro architecto vel temporibus aut.\n \rRem incidunt temporibus quia ut est. Nam qui vitae est et corrupti ducimus. Atque est et earum rem soluta in illum asperiores. Qui qui accusamus qui autem dolorum omnis. Consectetur quo aut nulla blanditiis tempora maxime. Et sequi dolor eos nemo eum dolor velit quae.',
        useful: 1,
        funny: 3,
        cool: 3,
        createdAt: '2019-12-02T04:40:45.000Z',
        updatedAt: '2019-12-02T04:40:45.000Z',
        photo_id: 'kuf65x19krzpqrjg4lfbre',
        caption: 'voluptatibus magnam ex',
        label: 'menu',
        imageUrl: 'http://lorempixel.com/640/480/food',
      },
      {
        id: 10,
        review_id: '2o8amayezbcngwr9j4ulsi',
        business_id: '6ijmru2gptj0w28o6uue79',
        user: 'Darrell',
        stars: 4,
        date: '2019-10-19',
        text: 'Quae incidunt velit quis aliquid tempore perspiciatis quia natus. Sed omnis ut quisquam illo eveniet omnis. Dolores excepturi sit dolorum. Ullam vel fugit nobis accusantium similique error minus.\n \rMaxime similique saepe officiis perferendis numquam nesciunt reprehenderit quod. Voluptatem qui repellendus sed ipsum accusantium minima et quod. Itaque sint minima. Quibusdam voluptatem nulla laboriosam quas sequi exercitationem quae. Porro quod ut amet aut assumenda veritatis recusandae placeat est.\n \rAut eligendi aspernatur sed vel qui. Accusantium voluptatem ullam iure dolores et repudiandae. Et placeat enim et corrupti cum dignissimos quas aut. Excepturi architecto enim. Ducimus ut reprehenderit doloremque ipsa sint quas mollitia non quia. Illo non totam at voluptate sequi iusto corporis et tenetur.',
        useful: 2,
        funny: 2,
        cool: 3,
        createdAt: '2019-12-02T04:40:45.000Z',
        updatedAt: '2019-12-02T04:40:45.000Z',
        photo_id: '1iek1hbmc8mtdxhlsb4yt4',
        caption: 'necessitatibus aspernatur consequatur',
        label: 'menu',
        imageUrl: 'http://lorempixel.com/640/480/food',
      },
    ];
  }

  render() {
    return (
      <div>
        Hello from Feed!
        {this.data.map((item) => <Review data={item} />)}
      </div>
    );
  }
}

export default Feed;
