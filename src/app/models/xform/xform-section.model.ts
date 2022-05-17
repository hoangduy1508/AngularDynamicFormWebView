import { LocaleString } from "./locale-string.type";
import { XFormQuestionModel } from "./xform-question.model";

export class XFormSectionModel {
    Title: LocaleString;

    Questions: XFormQuestionModel[];
}
