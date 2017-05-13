import * as React from "react";

import {
    ClassNamePropMakerAdapter,
    createDefaultComponent,
    DefaultComponent,
    PropMakerMetaComponent,
} from "@react-mdc/base";

import {
  BASE_CLASS_NAME,
} from "./constants";

export const CLASS_NAME = `${BASE_CLASS_NAME}__title`;

export type MetaProps = {
};

export type ChildProps = {
    className?: string,
};

/**
 * Header title component
 */
export class PropMaker extends ClassNamePropMakerAdapter<ChildProps, MetaProps, {}> {
    protected getBaseClassName() {
        return CLASS_NAME;
    }
}

export default createDefaultComponent<React.HTMLProps<HTMLHeadingElement>, MetaProps>(
    "h2",
    PropMakerMetaComponent.simple(new PropMaker(), "Title"),
    [],
);
