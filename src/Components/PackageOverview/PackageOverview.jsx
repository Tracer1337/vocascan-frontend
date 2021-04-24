import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import Button from "../Button/Button.jsx";

import "./PackageOverview.scss";

const PackageOverview = ({ data }) => {
  const history = useHistory();
  const { t } = useTranslation();

  const submitLearn = useCallback(() => history.push("learn/direction/"), [
    history,
  ]);

  return (
    <div className="package-overview">
      <h1 className="package-heading">{data?.name}</h1>
      <p className="package-unresolved">
        {t("components.packageOverview.unresolved")}{" "}
        {data?.stats?.vocabularies?.unresolved}
      </p>
      <p className="package-today">
        {t("components.packageOverview.today")} 100
      </p>
      <p className="package-unactivated">
        {t("components.packageOverview.unactivated")}{" "}
        {data?.stats?.vocabularies?.unactivated}
      </p>
      <div className="package-btn-wrapper">
        <Button block uppercase onClick={submitLearn}>
          {t("global.learn")}
        </Button>
      </div>
      <div className="package-btn-wrapper">
        <Button variant="outline" uppercase block>
          {t("global.activate")}
        </Button>
      </div>
    </div>
  );
};

export default PackageOverview;
