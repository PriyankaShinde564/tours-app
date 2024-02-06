import * as React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import PackageDetails from "@/component/Packages/PackageDetails/PackageDetails";

const AccountDetailsPage: NextPage = () => {
  const router = useRouter();
  const packageId = typeof router.query.package !== "undefined" ? router.query.package : "";
  return (
    <PackageDetails packageId={packageId}/>
  );
};

export default AccountDetailsPage;