import React from "react";
import Radio, { RadioGroup } from "./Radio";

const SelectionItemForm = ({ radioItem, title }) => {
  return (
    <div className="px-14">
      <label className="block mb-2 text-lg font-bold">{title}</label>
      <RadioGroup>
        {radioItem.map(({ id, title }) => (
          <div key={id} className="flex flex-col py-3 ">
            <Radio value={title} key={id}>
              {title}
            </Radio>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default SelectionItemForm;
