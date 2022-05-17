
import { LocaleString } from "./locale-string.type";
import { XFormSectionModel } from "./xform-section.model";

export class XFormModel {
    Id: string;
    Title: LocaleString;
    Description:LocaleString;
    Submit:LocaleString;
    Sections: XFormSectionModel[];
    ResponseNumber: number;
}
