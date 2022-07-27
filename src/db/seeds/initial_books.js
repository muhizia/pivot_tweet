exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('books').del()
        .then(function() {
            // Inserts seed entries
            return knex('books').insert([{
                    title: 'Who Is Jesus?',
                    description: 'A famed historian once noted that, regardless of what you think of him personally, Jesus Christ stands as the central figure in the history of Western civilization. A man violently rejected by some and passionately worshipped by others, Jesus remains as polarizing as ever. But most people still know very little about who he really was, why he was really here, or what he really claimed',
                    url: 'https://www.crossway.org/books/who-is-jesus-case/',
                    thumbnails: '2.jpeg',
                    published: 'January 31, 2015',
                    author: 'Greg Gilbert'
                },
                {
                    title: 'Knowing God',
                    description: 'KNOWING GOD is one of the most significant and popular Christian books of our time. J I Packer\'s life-changing book has deepened the faith and understanding of millions of people around the world. This edition includes a helpful study guide for individuals and groups.',
                    url: 'https://www.crossway.org/books/who-is-jesus-case/',
                    thumbnails: '1.jpeg',
                    published: 'June 24, 1993',
                    author: 'J. I. Packer'
                },
                {
                    title: 'What is the gospel?',
                    description: 'What is the gospel? It seems like a simple question, yet it has been known to incite some heated responses, even in the church. How are we to formulate a clear, biblical understanding of the gospel? Tradition, reason, and experience all leave us ultimately disappointed. If we want answers, we must turn to the Word of God.',
                    url: 'https://www.9marks.org/answer/what-gospel/',
                    thumbnails: '3.jpeg',
                    published: 'March 9, 2010',
                    author: 'Greg Gilbert'
                },
                {
                    title: 'Prosperity?: Seeking the True Gospel',
                    description: 'If even an angel preaches a gospel contrary to God\'s word, he is under a curse. There is not a Christian in the world that does not need to seriously consider Paul\'s words to the Galatians. The gospel is the church\'s most precious gift to cherish, protect, and pass on. We must never stop checking what we believe and preach, and then ask the question: Is this the gospel? Is this the gospel that God has revealed to us in the Bible?There is a false gospel--the prosperity gospel--sweeping across continents. There are many churches preaching this false gospel. It is a dangerous lie wrapped in a covering of religion. Those affected by it are being led away from God\'s good news to a man-centered deception. Paul took nothing more seriously than the danger of a different gospel and we feel the same way. Nothing is more serious; our souls depend on it.',
                    url: 'https://books.google.rw/books/about/Prosperity.html?id=BiQjvgAACAAJ&source=kp_book_description&redir_esc=y',
                    thumbnails: '4.jpeg',
                    published: '2016',
                    author: 'Michael Maura, John Piper, Wayne Grudem'
                }
            ]);
        });
};