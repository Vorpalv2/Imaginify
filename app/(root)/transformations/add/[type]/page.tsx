"use client";

import { useParams } from "next/navigation";
import React from "react";

const AddTransformationTypePage = () => {
  const param = useParams();
  return <div>AddTransformationTypePage:{param.type}</div>;
};

export default AddTransformationTypePage;
