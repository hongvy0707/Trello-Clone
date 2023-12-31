export interface CardData {
  _id: string;
  boardId: string;
  columnId: string;
  title: string;
  description: string | null;
  cover: string | null;
  memberIds: string[];
  comments: string[];
  attachments: string[];
}

export interface ColumnData {
  _id: string;
  boardId: string;
  title: string;
  cardOrderIds: string[];
  cards: CardData[];
}

interface Board {
  _id: string;
  title: string;
  description: string;
  type: string;
  ownerIds: string[];
  memberIds: string[];
  columnOrderIds: string[];
  columns: ColumnData[];
}
export type BoardType = Board

export const mockData: BoardType = {
  _id: 'board-id-01',
  title: 'Project Trello Clone Board',
  description: '',
  type: 'public',
  ownerIds: [],
  memberIds: [],
  columnOrderIds: ['column-id-01', 'column-id-02', 'column-id-03'],
  columns: [
    {
      _id: 'column-id-01',
      boardId: 'board-id-01',
      title: 'To Do Column 01',
      cardOrderIds: [
        'card-id-01',
        'card-id-02',
        'card-id-03',
        'card-id-04'
        // ... (other card IDs)
      ],
      cards: [
        {
          _id: 'card-id-01',
          boardId: 'board-id-01',
          columnId: 'column-id-01',
          title: 'Title of card 01',
          description: 'Markdown Syntax',
          cover:
            'https://e0.pxfuel.com/wallpapers/900/34/desktop-wallpaper-raiden-shogun-genshin-impact-drawn-genshin-impact-raiden-shogun.jpg',
          memberIds: ['test-user-id-01'],
          comments: ['test comment 01', 'test comment 02'],
          attachments: [
            'test attachment 01',
            'test attachment 02',
            // ... (other attachments)
          ],
        },
        { _id: 'card-id-02', boardId: 'board-id-01', columnId: 'column-id-01', title: 'Title of card 02', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
        { _id: 'card-id-03', boardId: 'board-id-01', columnId: 'column-id-01', title: 'Title of card 03', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
        { _id: 'card-id-04', boardId: 'board-id-01', columnId: 'column-id-01', title: 'Title of card 04', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        // ... (other cards)
      ],
    },
    // ... (other columns)
    {
      _id: 'column-id-02',
      boardId: 'board-id-01',
      title: 'Inprogress Column 02',
      cardOrderIds: ['card-id-08', 'card-id-09', 'card-id-10'],
      cards: [
        { _id: 'card-id-08', boardId: 'board-id-01', columnId: 'column-id-02', title: 'Title of card 08', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
        { _id: 'card-id-09', boardId: 'board-id-01', columnId: 'column-id-02', title: 'Title of card 09', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
        { _id: 'card-id-10', boardId: 'board-id-01', columnId: 'column-id-02', title: 'Title of card 10', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
      ]
    },
    
    {
      _id: 'column-id-03',
      boardId: 'board-id-01',
      title: 'Done Column 03',
      cardOrderIds: ['card-id-11', 'card-id-12', 'card-id-13'],
      cards: [
        { _id: 'card-id-11', boardId: 'board-id-01', columnId: 'column-id-03', title: 'Title of card 11', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
        { _id: 'card-id-12', boardId: 'board-id-01', columnId: 'column-id-03', title: 'Title of card 12', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
        { _id: 'card-id-13', boardId: 'board-id-01', columnId: 'column-id-03', title: 'Title of card 13', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
      ]
    }
  ],
};
