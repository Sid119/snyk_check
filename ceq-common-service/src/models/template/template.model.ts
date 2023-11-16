import { ApprovalModel } from '../approval/approval.model';
import { TemplateCategoryModel } from '../template-category/template-category.model';
import { DocumentModel } from '../document/document.model';
import { Template } from './template.interface';

/**
 * This is model class responsible for instantiating TemplateModel.
 * @public
 */
export class TemplateModel implements Template {
    private _id: string;
    private _title: string;
    private _ownerId: number;
    private _pdfDocId: DocumentModel;
    private _editableDocId: string;
    private _creationDate: string;
    private _lastModifiedDate: string;
    private _lastModifiedBy: string;
    private _category: TemplateCategoryModel;
    private _accessList: string[];
    private _approvalList: ApprovalModel[];
    private _status: string;
    private _description: string;
    private _ownerAccess: string;
    private _ownerName: string;
    private _categoryName: string;
    private _subCategoryName: string;
    private _approvalType: string;

    /**
     * @constructor
     */
    constructor(props: Template) {
        this._id = props.id;
        this._title = props.title;
        this._ownerId = props.ownerId;
        this._approvalType = props.approvalType;
        this._pdfDocId = this.createDocument(props.id, '', '');
        this._editableDocId = props.editableDocId;
        this._creationDate = props.creationDate;
        this._lastModifiedDate = props.lastModifiedDate;
        this._lastModifiedBy = props.lastModifiedBy;
        this._accessList = props.accessList;
        this._approvalList = this.createApproval(props.approvalList);
        this._status = props.status;
        this._description = props.description;
        this._ownerAccess = props.ownerAccess;
        this._ownerName = props.ownerName;
        this._categoryName = props.categoryName;
        this._subCategoryName = props.subCategoryName;
    }

    /** Get Id of the template */
    get id() {
        return this._id;
    }
    /** Set Id of the template */
    set id(id: string) {
        this._id = id;
    }

    /** Get title of the template */
    get title() {
        return this._title;
    }
    /** Set title of the template */
    set title(title) {
        this._title = title;
    }

    /** Get id of the owner for the template */
    get ownerId() {
        return this._ownerId;
    }
    /** Set id of the owner for the template */
    set ownerId(ownerId) {
        this._ownerId = ownerId;
    }

    /** Get the creation date for the template */
    get creationDate() {
        return this._creationDate;
    }
    /** Set the creation date for the template */
    set creationDate(creationDate: string) {
        this._creationDate = creationDate;
    }

    /** Get last modified date for the template */
    get lastModifiedDate() {
        return this._lastModifiedDate;
    }
    /** Set last modified date for the template */
    set lastModifiedDate(lastModifiedDate: string) {
        this._lastModifiedDate = lastModifiedDate;
    }

    /** Get last modified by for the template */
    get lastModifiedBy() {
        return this._lastModifiedBy;
    }

    /** Set last modified date for the template */
    set lastModifiedBy(lastModifiedBy: string) {
        this._lastModifiedBy = lastModifiedBy;
    }

    /** Get category for the template */
    get category() {
        return this._category;
    }
    /** Set category for the template */
    set category(category: TemplateCategoryModel) {
        this._category = category;
    }

    /** Get Access list for the template */
    get accessList() {
        return this._accessList;
    }
    /** Set access list for the template */
    set accessList(accessList: string[]) {
        this._accessList = accessList;
    }

    /** Get status for the template */
    get status() {
        return this._status;
    }
    /** Set status for the template */
    set status(status) {
        this._status = status;
    }

    /** Get description of the template */
    get description() {
        return this._description;
    }
    /** Set description for the template */
    set description(description) {
        this._description = description;
    }

    /** Get owner access for the template */
    get ownerAccess() {
        return this._ownerAccess;
    }
    /** Set owner access for the template */
    set ownerAccess(ownerAccess) {
        this._ownerAccess = ownerAccess;
    }

    /** Get Approval list for the template */
    get approvalList() {
        return this._approvalList;
    }
    /** Set Approval list for the template */
    set approvalList(approvalList) {
        this._approvalList = approvalList;
    }

    /** Get Pdf doc id of the template */
    get pdfDocId() {
        return this._pdfDocId;
    }
    /** Set Pdf doc id of the template */
    set pdfDocId(pdfDocId) {
        this._pdfDocId = pdfDocId;
    }

    /** Get Editable doc id for the template */
    get editableDocId() {
        return this._editableDocId;
    }
    /** Set Editable doc id for the template */
    set editableDocId(editableDocId) {
        this._editableDocId = editableDocId;
    }

    get ownerName() {
        return this._ownerName;
    }

    set ownerName(ownerName) {
        this._ownerName = ownerName;
    }

    get categoryName() {
        return this._categoryName;
    }

    set categoryName(categoryName) {
        this._categoryName = categoryName;
    }

    get subCategoryName() {
        return this._subCategoryName;
    }

    set subcategoryName(subcategoryName) {
        this._subCategoryName = subcategoryName;
    }

    get approvalType() {
        return this._approvalType;
    }

    set approvalType(value) {
        this._approvalType = value;
    }

    createDocument(id: string, s3key: string, type: string): DocumentModel {
        const newDocument = new DocumentModel({ id, s3key, type });
        console.log(newDocument);
        return newDocument;
    }

    createApproval(approvalList): ApprovalModel[] {
        const approvalType = this._approvalType;
        const newApproval: ApprovalModel[] = [];
        if (approvalType.toLowerCase() === 'freeflow') {
            approvalList.forEach((item) => {
                newApproval.push(
                    new ApprovalModel({
                        id: item.id,
                        approverId: 0,
                        approverOrder: 0,
                        status: -1,
                        name: item.name,
                        email: item.email,
                    }),
                );
            });
        } else {
            approvalList.forEach((item) => {
                newApproval.push(
                    new ApprovalModel({
                        id: item.id,
                        approverId: item.approverId,
                        approverOrder: item.approverOrder,
                        status: -1,
                        name: item.name,
                        email: item.email,
                    }),
                );
            });
        }
        return newApproval;
    }
}
