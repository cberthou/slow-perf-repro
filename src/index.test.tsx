import * as React from 'react';
import {describe, expect, test} from "vitest";
import {userEvent} from "@testing-library/user-event";
import {Counter} from "./index";
import {render} from "@testing-library/react";

describe('index', () => {
    test('add', async () => {
        const v = render(<Counter />);

        await userEvent.click(v.getByRole("button", { name: 'Increment' }));

        expect(v.getByText('Count: 1')).toBeDefined()
    })
})
