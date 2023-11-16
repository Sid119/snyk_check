import { Comment } from './comment.interface';
export class CommentModel implements Comment {
    private _id: string;
    private _content: string;
    private _author: string;

    constructor(id: string, content: string, author: string) {
        this._id = id;
        this._content = content;
        this._author = author;
    }
    get id(): string {
        return this._id;
    }
    get content(): string {
        return this._content;
    }
    set content(content: string) {
        this._content = content;
    }
    get author(): string {
        return this._author;
    }
    set author(author: string) {
        this._author = author;
    }
    addComment(): void {}
    editComment(newContent: string): void {
        this._content = newContent;
    }
    deleteComment(): void {}
}
