import { LocaleString } from "./locale-string.type";
import { XFormQuestionControlModel } from "./xform-question-control.model";

export class XFormQuestionModel {

    Id?: string = "";

    Title: LocaleString;

    Hint?: LocaleString;

    ValueId: string;

    Options?: Array<LocaleString>;

    Control: XFormQuestionControlModel;

    IsRequired?: boolean;
}
