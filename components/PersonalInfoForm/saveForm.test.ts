import { describe, it } from "vitest";

import { saveForm } from "@/components/PersonalInfoForm/saveForm";

const data = {
  firstName: "John",
  lastName: "Doe",
  phone: "123456",
};

describe("saveForm", () => {
  it("Should return false 50% of the times", () => {
    const results = saveForm(data);
  });
});
