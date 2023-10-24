import React from "react";
import { shallow } from "enzyme";
import Banner from "./Banner";

describe("Banner", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Banner />);
    expect(wrapper).toMatchSnapshot();
  });
});
