import * as React from "react";

import {
    ClassNameMetaBase,
    DefaultComponentBase,
} from "@react-mdc/base";

import {
  BASE_CLASS_NAME,
} from "./constants";

export const CLASS_NAME = BASE_CLASS_NAME;

export type MetaProps = {
};

export type ChildProps = {
    className?: string,
};

/**
 * Footer component
 */
export class Meta extends ClassNameMetaBase<ChildProps, MetaProps, {}> {
    protected renderBaseClassName() {
        return CLASS_NAME;
    }
}

export type Props = React.HTMLProps<HTMLElement> & MetaProps;

export default class Actions extends DefaultComponentBase<React.HTMLProps<HTMLElement>, MetaProps>(
    "footer",
    PropMakerMetaComponent.simple(new PropMaker(), "Container"),
    [],
);
