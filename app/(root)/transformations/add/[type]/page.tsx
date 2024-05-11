import Header from "@/app/components/shared/Header";
import TransformationsForm from "@/app/components/shared/TransformationsForm";
import { transformationTypes } from "@/constants";
import { getUserById } from "@/lib/database/actions/user.actions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import React from "react";

const AddTransformationsTypePage = async ({
  params: { type },
}: SearchParamProps) => {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");
  const user = await getUserById(userId);

  // based on transformation type, show transformation form with title
  const transformation = transformationTypes[type];

  return (
    <>
      <Header title={transformation.title} subTitle={transformation.subTitle} />

      {/* transformation form for each transformation */}

      <TransformationsForm
        action="Add"
        userId={user._id}
        type={transformation.type as TransformationTypeKey}
        creditBalance={user.creditBalance}
      />
    </>
  );
};

export default AddTransformationsTypePage;
