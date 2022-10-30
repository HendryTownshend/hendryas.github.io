import React from "react";

const brandlogoData = [
  {
    id: 1,
    image: "images/logo/be_php_logo.svg",
  },
  {
    id: 2,
    image: "images/logo/be_codeigniter_logo.svg",
  },
  {
    id: 3,
    image: "images/logo/be_javascript_logo.svg",
  },
  {
    id: 4,
    image: "images/logo/be_nodejs_logo.svg",
  },
  {
    id: 5,
    image: "images/logo/be_expressjs_logo.svg",
  },
  {
    id: 6,
    image: "images/logo/be_sequelizejs_logo.svg",
  },
  {
    id: 7,
    image: "images/logo/fe_bootstrap_logo.svg",
  },
  {
    id: 7,
    image: "images/logo/fe_css_logo.svg",
  },
  {
    id: 8,
    image: "images/logo/fe_html5_logo.svg",
  },
  {
    id: 8,
    image: "images/logo/fe_dart_logo.svg",
  },
  {
    id: 9,
    image: "images/logo/fe_flutter_logo.svg",
  },
  {
    id: 10,
    image: "images/logo/fe_reactjs_logo.svg",
  },
  {
    id: 11,
    image: "images/logo/db_mysql_logo.svg",
  },
  {
    id: 12,
    image: "images/logo/db_microsoft_sql_server_logo.svg",
  },
  {
    id: 13,
    image: "images/logo/db_postgresql_logo.svg",
  },
  {
    id: 14,
    image: "images/logo/db_dbeaver_logo.svg",
  },
  {
    id: 15,
    image: "images/logo/deploy_heroku_logo.svg",
  },
  {
    id: 16,
    image: "images/logo/vc_github_logo.svg",
  },
  {
    id: 17,
    image: "images/logo/vc_git_logo.svg",
  },
];

function Brandlogos() {
  return (
    <div id="branglogos">
      <div className="container">
        <div className="row">
          {brandlogoData.map((brandlogo) => (
            <div className="col-md-3 col-6" key={brandlogo.id}>
              <div className="client-item">
                <div className="inner">
                  <img src={brandlogo.image} alt="client-name" style={brandlogo.id === 2 ? { width: '30%' } : brandlogo.id === 7 ? { width: '30%' } : brandlogo.id === 12 || brandlogo.id === 14 ? { width: '40%' } : { width: '50%' }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Brandlogos;
