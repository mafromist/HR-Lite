import{LitElement as e,svg as t,html as a,css as o}from"lit";import{Router as i}from"@vaadin/router";import{LitState as l,observeState as n}from"lit-element-state";const s=new CSSStyleSheet;s.replaceSync("\n      .btn-primary {\n        background-color: var(--ing-orange);\n        color: var(--white);\n        padding: 8px 16px;\n        font-size: 16px;\n        outline: none;\n        border: none;\n        cursor: pointer;\n        border-radius: 5px;\n      }\n\n      .btn-primary:hover {\n        background-color: transparent;\n        color: var(--ing-blue);\n        outline: 2px solid var(--ing-blue);\n      }\n\n       .btn-primary.small {\n        font-size: 12px;\n      }\n");const r=(e,t)=>new Date(e.getTime()+Math.random()*(t.getTime()-e.getTime())).toISOString().split("T")[0],c=e=>{const t={"ç":"c","Ç":"C","ğ":"g","Ğ":"G","ı":"i","İ":"I","ö":"o","Ö":"O","ş":"s","Ş":"S","ü":"u","Ü":"U"};return e.replace(/[çÇğĞıİöÖşŞüÜ]/g,(e=>t[e]))},d=(e,t)=>`${c(e.toLowerCase())}.${c(t.toLowerCase())}@ing.com`,p=["Baran","Meryem","Deniz","Yusuf","Duru","Kaan","Zeynep","Rüzgar","Efe","Asya"],h=["Şahin","Bolu","Kurtuluş","Öztürk","Aksoy","Çetin","Acar","Yıldız","Demirtaş","Kılınç"],m=["Analytics","Tech"],g=["Junior","Medior","Senior"];const u=new class extends l{constructor(){super(),this.storageKey="store",this.language="en",this.subscribers=[];if(!localStorage.getItem(this.storageKey)){const e=((e=50)=>Array.from({length:e},((e,t)=>{const a=p[Math.floor(Math.random()*p.length)],o=h[Math.floor(Math.random()*h.length)];return{id:(t+1).toString(),firstName:a,lastName:o,dateOfEmployment:r(new Date(2010,0,1),new Date),dateOfBirth:r(new Date(1950,0,1),new Date(2003,0,1)),phoneNumber:`+(90) ${Math.floor(500+90*Math.random())} ${Math.floor(9999999*Math.random())}`,email:d(a,o),department:m[Math.floor(Math.random()*m.length)],position:g[Math.floor(Math.random()*g.length)],selected:!1}})))(100);localStorage.setItem(this.storageKey,JSON.stringify(e))}this.state={language:localStorage.setItem("language","en"),employees:JSON.parse(localStorage.getItem(this.storageKey)||"[]")}}fetchLanguage(){return this.language}setLanguage(e){this.language=e,this.notifySubscribers()}subscribe(e){this.subscribers.push(e)}notifySubscribers(){this.subscribers.forEach((e=>e(this.language)))}fetchEmployees(){return this.state.employees}fetchEmployee(e){return this.state.employees.find((t=>t.id===e))}addEmployee(e){const t={id:(Math.max(...this.state.employees.map((e=>parseInt(e.id))),0)+1).toString(),...e,selected:!1};return this.state={employees:[t,...this.state.employees]},localStorage.setItem(this.storageKey,JSON.stringify(this.state.employees)),t}updateEmployee(e){const t=this.state.employees.findIndex((t=>t.id===e.id));return-1!==t&&(this.state.employees[t]=e,this.state={employees:[...this.state.employees]},localStorage.setItem(this.storageKey,JSON.stringify(this.state.employees))),e}deleteEmployee(e){this.state={employees:this.state.employees.filter((t=>t.id!==e))},localStorage.setItem(this.storageKey,JSON.stringify(this.state.employees))}};class b extends(n(e)){static properties={employees:{type:Array}};constructor(){super(),this.employees=[],this.employees=u.employees,this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),this.employees=[]}}t`<rect width="10" height="10"></rect>`;const v=t`<path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>`,y=t`<path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>`,f=t`<path d="M6 19c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>`,x=t`<path fill="currentColor" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>`,w=t`   <path fill="#012169" d="M0 0h640v480H0z"/>
<path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0z"/>
<path fill="#C8102E" d="m424 281 216 159v40L369 281zm-184 20 6 35L54 480H0zM640 0v3L391 191l2-44L590 0zM0 0l239 176h-60L0 42z"/>
<path fill="#FFF" d="M241 0v480h160V0zM0 160v160h640V160z"/>
<path fill="#C8102E" d="M0 193v96h640v-96zM273 0v480h96V0z"/>`,E=t` <g fill-rule="evenodd">
<path fill="#e30a17" d="M0 0h640v480H0z"/>
<path fill="#fff" d="M407 247.5c0 66.2-54.6 119.9-122 119.9s-122-53.7-122-120 54.6-119.8 122-119.8 122 53.7 122 119.9"/>
<path fill="#e30a17" d="M413 247.5c0 53-43.6 95.9-97.5 95.9s-97.6-43-97.6-96 43.7-95.8 97.6-95.8 97.6 42.9 97.6 95.9z"/>
<path fill="#fff" d="m430.7 191.5-1 44.3-41.3 11.2 40.8 14.5-1 40.7 26.5-31.8 40.2 14-23.2-34.1 28.3-33.9-43.5 12-25.8-37z"/>
</g>`;t`<path d="M7.5 6.5C7.5 8.981 9.519 11 12 11C14.481 11 16.5 8.981 16.5 6.5C16.5 4.019 14.481 2 12 2C9.519 2 7.5 4.019 7.5 6.5ZM20 21H21V20C21 16.141 17.859 13 14 13H10C6.14 13 3 16.141 3 20V21H20Z"/>`;const $=t`<path d="M4.6 2A2.6 2.6 0 0 0 2 4.6v3.8A2.6 2.6 0 0 0 4.6 11h3.8A2.6 2.6 0 0 0 11 8.4V4.6A2.6 2.6 0 0 0 8.4 2H4.6ZM15.6 2A2.6 2.6 0 0 0 13 4.6v3.8a2.6 2.6 0 0 0 2.6 2.6h3.8A2.6 2.6 0 0 0 22 8.4V4.6A2.6 2.6 0 0 0 19.4 2h-3.8ZM4.6 13A2.6 2.6 0 0 0 2 15.6v3.8A2.6 2.6 0 0 0 4.6 22h3.8a2.6 2.6 0 0 0 2.6-2.6v-3.8A2.6 2.6 0 0 0 8.4 13H4.6ZM15.6 13a2.6 2.6 0 0 0-2.6 2.6v3.8a2.6 2.6 0 0 0 2.6 2.6h3.8a2.6 2.6 0 0 0 2.6-2.6v-3.8a2.6 2.6 0 0 0-2.6-2.6h-3.8Z"/>`,k=t`<path fill="currentColor" d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"/>`;t`<path fill="currentColor" d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/>`;const P=t`
  <g transform="scale(0.0485)">
    <path d="M389.844,182.85c-6.743,0-12.21,5.467-12.21,12.21v222.968c0,23.562-19.174,42.735-42.736,42.735H67.157
      c-23.562,0-42.736-19.174-42.736-42.735V150.285c0-23.562,19.174-42.735,42.736-42.735h267.741c6.743,0,12.21-5.467,12.21-12.21
      s-5.467-12.21-12.21-12.21H67.157C30.126,83.13,0,113.255,0,150.285v267.743c0,37.029,30.126,67.155,67.157,67.155h267.741
      c37.03,0,67.156-30.126,67.156-67.155V195.061C402.054,188.318,396.587,182.85,389.844,182.85z"/>
    <path d="M483.876,20.791c-14.72-14.72-38.669-14.714-53.377,0L221.352,229.944c-0.28,0.28-3.434,3.559-4.251,5.396l-28.963,65.069
      c-2.057,4.619-1.056,10.027,2.521,13.6c2.337,2.336,5.461,3.576,8.639,3.576c1.675,0,3.362-0.346,4.96-1.057l65.07-28.963
      c1.83-0.815,5.114-3.97,5.396-4.25L483.876,74.169c7.131-7.131,11.06-16.61,11.06-26.692
      C494.936,37.396,491.007,27.915,483.876,20.791z M466.61,56.897L257.457,266.05c-0.035,0.036-0.055,0.078-0.089,0.107
      l-33.989,15.131L238.51,247.3c0.03-0.036,0.071-0.055,0.107-0.09L447.765,38.058c5.038-5.039,13.819-5.033,18.846,0.005
      c2.518,2.51,3.905,5.855,3.905,9.414C470.516,51.036,469.127,54.38,466.61,56.897z"/>
  </g>`,M=t`
  <path d="M62 78H16C7 78 0 71 0 62V16C0 7 7 0 16 0h46c9 0 16 7 16 16v46c0 9-7 16-16 16z" style="fill:#ff6200"/>
  <path d="m76 68-2-1h-1l1 3 1 1 1-2v-1m-11 9v-7l-2 1-2 1 1 3v2l1 1 2-1m-20-6v-2l-2-2-1-1-1 3 2 3 1 3 1-4m26 2c-1-1 1-3-1-3l-2-1v3l1 4 3-2-1-1zm-2-28-3-2v-1l-3-2v-5c0 2 2 2 2 2 2 0 2-1 3-2l1-1 1-1h1l-9-1-2 2 1 3v5l2 1 1 2 4 2 1-2zm-2 6-4-1v1l4 2v-2zm-7-24 1 2h4c3-2-2-3-3-3h-3l1 1zm7-4 5 4 3-2-1-5-2-1c-1-1-3 0-4 1l-1 3zm-13 3h-2l-3 1-1 3h1l3-1 2-3zm-2 8-2-2h-8c0 2 2 3 2 3l3 2 2-1v3l-1 3-3 2v3l2-1 2-2 2-1v-7l1-2zm-3 17-2-1-2 1 1 2 2-1 1-1zm-6-26 2-2h1c-1-3-2-3-3-3l-2-1c-2 0-4 1-4 3v3l3 3 3-3zm26 24 9 2v2l-9-2v3l3 1 6 3v2l-10-5-2 2-4-2-4-1v-3l2-3h2v-2l-1-1h-9l-1 2c0 2 2 1 3 0v2c0 2 2 2 2 2l-1 2v1l-6 2-2 1-2-1h-2l-11 5v-2l11-6v-2l-7 1-5 2-1-2 6-2 7-1-1-1c0-2-2-4-4-6l-1-3h2v-3l-1-3 1-3-2-1-2-1-1-5 1-4 3-2 3-1 5 2 2 4h3l5 1 8-2c0-3 3-5 5-5h4l4 5 1 4-1 3-3 2v6l-1 3 2-1c0 4-1 3-2 5l-2 4-2 1v1M52 74l-1-1-3-1v3l2 3h3l-1-2v-2zm-5-15 1 4h1l2-2v4l3 1 1-2 2 2h3v-3l3 2 1-2 1-4c-3-2-6-2-9-2s-6 0-9 2zm12 12-4 2v5h3l1-3v-4zM27 20l-1 3 1 5-3 2v5l2-1 3-3 2-1v-3l-1-2v-6l-3 1m4 22-6 2-4 2 1 3v4l4-4 5-4v-3m-6 30 1-2 4-4-2-2-2 2-2 1 1 1v4m12-7-2-1-1 2 1 4 1 1 3 2-2-5v-3m3-55 6 4 4 2 2-4 3 1v4l2-1 5-1c2-1 3-4 5-4l5 2h3l2-1v-1l-8-5-4 3-1-3h-2l-2 6h-2V9s2-2 1-3l-3 1-3 2-1-1-3-1-1 4-6-5-8 3-4 5-2 3 3 1 2-3c2-1 6-3 7-5zM22 54v2l1 5v3l1 2 1-1 2-4-1-4v-5l-4 2zm10-17v-3h-4l-4 2v6l2-1 4-3 2-1zm-3 40-1 1h-1l-2-5 6-2 1 2-3 4" style="fill:#fff"/>
`;class D extends e{static properties={icon:{type:Object}};static styles=o`
    :host {
      display: inline-block;
      width: 24px;
      height: 24px;
    }

    svg {
      width: 100%;
      height: 100%;
      line-height: 0;
    }

    svg:hover {
      fill: var(--ing-orange);
    }
  `;render(){return a`${e=this.icon,a`<svg width="24" height="24" viewBox="${e===w||e===E?"0 0 640 480":e===M?"0 0 77.7 77.7":"0 0 24 24"}">${e}</svg>`}`;var e}}customElements.define("icon-component",D);class S extends e{static properties={message:{type:String},isActive:{type:Boolean},modalTitle:{type:String}};constructor(){super(),this.message="",this.isActive=!1}updated(e){e.has("isActive")&&this.dispatchEvent(new CustomEvent("modal-closed",{detail:{isActive:this.isActive},bubbles:!0,composed:!0}))}static styles=o`
    .modal {
      z-index: 1;
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      scroll-behavior: none;
      display: none;
    }

    .modal.active {
      display: grid;
      place-items: center;
    }

    .modal-content {
      display: block;
      position: absolute;
      overflow: auto;
      background-color: var(--white);
      border-radius: 5px;
      padding: 8px 16px;
      min-width: 250px;
      max-width: 400px;
      max-height: 300px;
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      background: white;
      color: var(--ing-orange);
      font-size: 18px;
      line-height: 0;
    }

    .modal-open {
      overflow-y: hidden;
    }

    .modal-body {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .modal-actions {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 10px;
      width: 100%;
    }

    .btn {
      display: inline-block;
      padding: 10px 20px;
      margin: 4px 0;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-family: 'INGFont', sans-serif;
      font-size: 16px;
    }

    .btn-close {
      background-color: transparent;
      border: none;
      cursor: pointer;
      color: var(--ing-orange);
      padding: 0;
      margin: 0;
    }

    .btn-confirm {
      background-color: var(--ing-orange);
      color: var(--white);
    }
    .btn-cancel {
      outline: 2px solid var(--ing-blue);
      color: var(--ing-blue);
    }
  `;render(){return a`
      <div class="modal ${this.isActive?"active":""}">
        <div class="modal-content">
          <div class="modal-header">
            <p>${this.modalTitle}</p>
            <button @click=${this.closeModal} class="btn-close">
              <icon-component .icon=${y}></icon-component>
            </button>
          </div>
          <div class="modal-body">
            <slot name="modal-message" class="modal-message"></slot>
            <div name="modal-actions" class="modal-actions">
              <button class="btn btn-confirm" @click="${this.handleConfirm}">
                Confirm
              </button>
              <button class="btn btn-cancel" @click="${this.handleCancel}">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    `}handleConfirm(){this.dispatchEvent(new CustomEvent("confirm"))}handleCancel(){this.dispatchEvent(new CustomEvent("cancel"))}closeModal(){this.isActive=!1}}customElements.define("modal-component",S);class L extends e{static styles=o`
    :host {
      position: relative;
      display: inline-block;
    }

    .tooltip-text {
      visibility: hidden;
      width:max-content;
      background-color: var(--ing-blue);
      color: var(--white);
      text-align: center;
      border-radius: 6px;
      padding: 6px 16px;
      position: absolute;
      z-index: 1;
      bottom: 125%;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0;
      transition: all 150ms cubic-bezier(0.25, 0.8, 0.25, 1);
      font-size: 12px;
    }

    :host(:hover) .tooltip-text {
      visibility: visible;
      opacity: 1;
    }

    :host(:hover) .tooltip-text::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      /* margin-left: -5px; */
      border-width: 5px;
      border-style: solid;
      border-color: var(--ing-blue) transparent transparent transparent;
    }
  `;render(){return a`
      <slot></slot>
      <div class="tooltip-text">
        <slot name="tooltip"></slot>
      </div>
    `}}customElements.define("tooltip-component",L);const z={en:{title:{employeeList:"Employee List"},warnings:{loading:"Loading...",noEmployees:"No employees found"},buttons:{homePage:"Go to back to Employee List",deleteSelected:"Delete Selected Employees"},navigation:{employees:"Employee List",addNewEmployee:"Add New"},placeholder:{search:"Search employees..."},buttonText:{edit:"Edit",delete:"Delete"},tableHeaders:{firstName:"First Name",lastName:"Last Name",employmentDate:"Employment Date",birthDate:"Birth Date",phoneNumber:"Phone Number",email:"Email",department:"Department",position:"Position",actions:"Actions"},viewMode:{grid:"Grid View",table:"Table View"},labels:{dateOfBirth:"Birth Date",dateOfEmployment:"Employment Date",phoneNumber:"Phone Number",email:"Email",department:"Department",position:"Position"}},tr:{title:{employeeList:"Çalışan Listesi"},warnings:{loading:"Yükleniyor...",noEmployees:"Çalışan Bulunamadı"},buttons:{homePage:"Çalışan Listesine Geri Dön",deleteSelected:"Seçilen Çalışanları Sil"},navigation:{employees:"Çalışan Listesi",addNewEmployee:"Yeni Ekle"},placeholder:{search:"Çalışanları Ara..."},buttonText:{edit:"Düzenle",delete:"Sil"},tableHeaders:{firstName:"Ad",lastName:"Soyad",employmentDate:"İşe Başlama Tarihi",birthDate:"Doğum Tarihi",phoneNumber:"Telefon Numarası",email:"E-posta",department:"Departman",position:"Pozisyon",actions:"İşlemler"},viewMode:{list:"Liste Görünümü",table:"Tablo Görünümü"},labels:{dateOfBirth:"Doğum Tarihi",dateOfEmployment:"İşe Başlama Tarihi",phoneNumber:"Telefon Numarası",email:"E-posta",department:"Departman",position:"Pozisyon"}}},N=e=>{const t=u.fetchLanguage();if(!z[t])return console.error(`Translation for language "${t}" is not available.`),e;const a=(o=z[t],e.split(".").reduce(((e,t)=>e&&void 0!==e[t]?e[t]:null),o));var o;return a||(console.error(`Translation for key "${e}" is not available.`),e)};class C extends b{static styles=[s,o`
    .employee-list {
      padding: 20px 56px;
    }

    .title {
      font-size: 24px;
      color: var(--ing-orange);
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .features {
      gap: 16px;
    }

    .table-view {
      display: table;
      width: 100%;
      border-collapse: collapse;
      background-color: var(--white);
    }

    .table-view th,
    .table-view td {
      padding: 12px 6px;
      font-size: 14px;
      text-align: center;
    }

    .table-view th {
      color: var(--ing-orange);
    }

    .table-view th,
    .table-view tr {
      border-bottom: 1px solid var(--ing-gray);
    }

    .table-view tr:last-of-type {
      border-bottom: none;
    }

    .table-view th:last-of-type,
    .table-view td:last-of-type {
      padding-right: 12px;
      padding-left: 36px;
    }

    .grid-view {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 1rem;
    }

    .grid-card {
      outline: 1px solid var(--ing-orange);
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding: 32px 16px;
      line-height: 0.9em;
      position: relative;
    }

    .grid-card .name {
      font-size: 20px;
      font-weight: bold;
      color: var(--ing-blue);
      text-decoration: underline;
      margin-bottom: 16px;
    }

    .grid-card .category {
      color: var(--ing-blue);
      margin-bottom: 4px;
    }

    .grid-card.selected {
      outline: 4px solid var(--ing-orange);
      background-color: var(--ing-orange-10);
    }

    .grid-view .actions-buttons {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      gap: 12px;
      align-items: flex-end;
    }

    .grid-view .actions-buttons p {
      font-size: 14px;
      color: var(--ing-orange);
      display: flex;
      align-items: center;
      gap: 4px;
      margin: 0;
    }

    .checkbox-select-employee {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .checkbox-select-employee-label {
      position: absolute;
      top: 16px;
      right: 16px;
      cursor: pointer;
      color: var(--ing-blue);
    }

    .checkbox-select-employee-label:hover {
      text-decoration: underline;
    }

    .checkbox-select-employee-label.selected {
      color: var(--ing-orange);
    }

    .grid-card .detail {
      display: flex;
      flex-direction: column;
      margin-bottom: 12px;
    }

    .actions-buttons {
      display: flex;
      justify-content: center;
      gap: 8px;
    }

    .actions-buttons * {
      background-color: transparent;
      border: none;
      fill: var(--ing-orange);
      cursor: pointer;
    }

    .actions-buttons icon-component button svg {
      width: 20px;
      height: 20px;
    }

    .toggle-view-buttons {
      display: flex;
      padding: 2px;
      margin: 0;
      gap: 8px;
    }

    .toggle-view-btn {
      background-color: transparent;
      border: none;
      cursor: pointer;
      fill: var(--ing-blue);
    }

    .toggle-view-btn > svg {
      width: 24px;
      height: 24px;
      fill: var(--ing-blue);
    }

    .toggle-view-btn:hover > svg > path {
      fill: var(--ing-orange);
    }

    .toggle-view-btn:disabled {
      fill: var(--ing-orange);
      color: var(--ing-orange);
    }

    .pagination {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      text-align: center;
    }

    .pagination * {
      font-family: 'INGFont', sans-serif;
    }

    .pagination-btn {
      margin: 0 8px;
      background-color: transparent;
      border: none;
      cursor: pointer;
      color: var(--ing-orange);
      border: 2px solid var(--ing-orange);
      border-radius: 50%;
      font-size: 14px;
    }

    .pagination-btn:hover {
      background-color: var(--ing-orange);
      color: var(--white);
    }

    .page-btn {
      background-color: transparent;
      border: none;
      font-size: 14px;
      cursor: pointer;
      display: inline-block;
      padding: 4px 8px;
      border-radius: 5px;
      margin: 0 4px;
      color: var(--ing-blue);
    }

    .page-btn:hover:not(.active) {
      background-color: transparent;
      outline: 2px solid var(--ing-orange);
      color: var(--ing-orange);
    }

    .page-btn.active {
      margin: 0 5px;
      background-color: var(--ing-orange);
      color: var(--white);
      border: none;
    }

    .page-btn.active:hover {
      background-color: transparent;
      border: 2px solid var(--ing-orange);
      color: var(--ing-blue);
    }

    .features {
      display: flex;
      flex-direction: column-reverse;
      gap: 16px;
      align-items: flex-end;
    }

    .header-actions {
      display: flex;
      flex-direction: column-reverse;
      gap: 8px;
      margin-bottom: 16px;
    }

    .search {
      display: flex;
      align-items: center;
      gap: 8px;
      color: var(--ing-blue);
    }

    .search-input {
      border: 2px solid var(--ing-orange);
      border-radius: 4px;
      padding: 4px 6px;
      margin: 0;
      width: 180px;
    }

    input[type='search' i] {
      appearance: none;
    }

    .search-input::-webkit-search-decoration {
      -webkit-appearance: none;
    }

    .search-input::-webkit-search-cancel-button {
      -webkit-appearance: none;
    }

    .search-input:focus {
      opacity: 1;
      padding: 4px 6px;
      border: 2px solid var(--ing-blue);
    }

    .search-input:focus:hover {
      border: 2px solid var(--ing-blue);
      padding: 4px 6px;
      opacity: 1;
    }

    .search-input::placeholder {
      font-size: 14px;
      font-family: 'INGFont', sans-serif;
      color: var(--ing-blue);
      text-align: center;
      margin: 0;
    }

    .no-employees {
      display: grid;
      width: 100%;
      height: 100%;
      place-content: center;
      text-align: center;
    }

    @media only screen and (min-width: 768px) {
      .grid-view .actions-buttons {
        display: flex;
      }

      .header-actions {
        flex-direction: row;
        gap: 16px;
        align-items: center;
        margin-bottom: 0;
      }

      .features {
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
      }
    }
  `];static properties={employees:{type:Array},selectedEmployeesIDs:{type:Array},viewMode:{type:String},currentPage:{type:Number},employeesPerPage:{type:Number},totalPages:{type:Number},loading:{type:Boolean},selectedToDeleteID:{type:Number},deleteMessage:{type:String},isModalActive:{type:Boolean},filteredEmployees:{type:Array}};constructor(){super(),this.employees=[],this.selectedEmployeesIDs=[],this.viewMode="table",this.currentPage=1,this.employeesPerPage=10,this.totalPages=1,this.loading=!0,this.isDelete=!1,this.selectedToDeleteID=null,this.deleteMessage="",this.isModalActive=!1,this.filteredEmployees=[];const e=new URLSearchParams(window.location.search);this.currentPage=this.getPageFromUrl()||1,this.searchQuery=e.get("search")||"",window.addEventListener("popstate",(()=>this.checkUrlChange()))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("popstate",(()=>this.checkUrlChange()))}getPageFromUrl(){const e=new URLSearchParams(window.location.search),t=parseInt(e.get("page"));return!isNaN(t)&&t>0?t:1}changePage(e){e>0&&e!==this.currentPage&&(this.currentPage=e,this.changeUrl())}checkUrlChange(){const e=new URLSearchParams(window.location.search);this.currentPage=this.getPageFromUrl(),this.searchQuery=e.get("search")||"",this.filterEmployees()}handleSearch(e){const t=e?.target?.value?.trim()||"";this.searchQuery=t,this.currentPage=1,this.changeUrl(),this.searchQuery&&0!==this.filteredEmployees.length||this.clearSearch()}clearSearch(){this.searchQuery?(this.searchQuery="",this.changeUrl()):this.changeUrl()}changeUrl(){const e=new URLSearchParams(window.location.search);e.set("page",this.currentPage),e.set("search",this.searchQuery);const t=`${window.location.pathname}?${e.toString()}`;window.history.pushState({},"",t),this.filterEmployees()}dividedEmployees(e){const t=(this.currentPage-1)*this.employeesPerPage,a=t+this.employeesPerPage;return e.slice(t,a)}filterEmployees(){const e=this.searchQuery.toLowerCase();this.searchQuery?this.filteredEmployees=this.employees.filter((t=>Object.values(t).join(" ").toLowerCase().includes(e))):this.filteredEmployees=this.dividedEmployees(this.employees),this.totalPages=Math.ceil(this.filteredEmployees.length/this.employeesPerPage),0===this.filteredEmployees.length&&this.searchQuery&&this.clearSearch(),this.requestUpdate()}async firstUpdated(){try{this.loading=!0;const e=await u.fetchEmployees();Array.isArray(e)?this.employees=e:console.log("Data is not an array",e)}catch(e){console.log("Error fetching employees",e)}finally{this.loading=!1,this.filterEmployees(),this.requestUpdate()}window.addEventListener("popstate",(()=>{this.currentPage=this.getPageFromUrl()}))}render(){return this.loading?a`<p>${N("warnings.loading")}</p>`:this.filteredEmployees.length?a`
        <section class="employee-list">
          <div class="header">
            <h2 class="title">${N("title.employeeList")}</h2>

            <div class="features">
              <div class="header-actions">
                <!-- Delete Button for Selected Employees -->
                ${this.selectedEmployeesIDs.length>0?a`
                      <button
                        class="btn-primary small"
                        @click="${this.onDeleteSelected}"
                        data-tooltip="Delete All Selected Employees"
                        aria-label="Delete Selected Employees"
                      >
                      ${N("buttons.deleteSelected")}
                      </button>
                    `:""}

                <!-- Search on page -->
                <div class="search">
                  <input
                    type="search"
                    id="search"
                    placeholder="${N("placeholder.search")}"
                    class="search-input"
                    @input=${this.handleSearch}
                    @search=${this.clearSearch}
                    aria-label="Search through site content"
                    autocomplete="off"
                  />
                </div>
              </div>

              <!-- View Mode Toggle Button -->
              <div class="toggle-view-buttons">
                <tooltip-component>
                  <button
                    class="table-view-btn toggle-view-btn"
                    @click="${()=>this.switchViewMode("table")}"
                    ?disabled=${"table"===this.viewMode}
                    aria-label="${N("viewMode.table")} Button"
                  >
                    <icon-component .icon=${k}></icon-component>
                  </button>
                  <div slot="tooltip">${N("viewMode.table")}</div>
                </tooltip-component>
                <tooltip-component>
                  <button
                    class="grid-view-btn toggle-view-btn"
                    @click="${()=>this.switchViewMode("grid")}"
                    ?disabled=${"grid"===this.viewMode}
                    aria-label="${N("viewMode.grid")}"
                  >
                    <icon-component .icon=${$}></icon-component>
                  </button>
                  <div slot="tooltip">${N("viewMode.grid")}</div>
                </tooltip-component>
              </div>
            </div>
          </div>

          <!-- Grid View -->
          ${"grid"===this.viewMode?a` <div class="grid-view" aria-label="${N("title.employeeList")}">
                ${this.filteredEmployees.map((e=>a`
                    <div
                      class="grid-card ${e.selected?"selected":""}"
                    >
                      <div class="grid-content">
                        <div class="name" aria-label="Employee Name">
                          <span>${e.firstName}</span>
                          <span>${e.lastName}</span>
                        </div>
                        <div
                          class="detail"
                          aria-label="Employee's ${N("labels.dateOfBirth")}"
                        >
                          <span class="category">${N("labels.dateOfBirth")}:</span>
                          <span>${e.dateOfBirth}</span>
                        </div>
                        <div
                          class="detail"
                          aria-label="Employee's Phone Number"
                        >
                          <span class="category">Phone Number:</span>
                          <span>${e.phoneNumber}</span>
                        </div>
                        <div class="detail" aria-label="Employee's Email">
                          <span class="category">Email: </span>
                          <span>${e.email}</span>
                        </div>
                        <div
                          class="detail"
                          aria-label="Employee's Department/Position"
                        >
                          <span class="category">Department/Position: </span>
                          <span
                            >${e.department} / ${e.position}</span
                          >
                        </div>

                        <div
                          class="detail"
                          aria-label="Employee's ${N("labels.dateOfEmployment")}"
                        >
                          <span class="category">${N("labels.dateOfEmployment")}: </span>
                          <span>${e.dateOfEmployment}</span>
                        </div>
                      </div>

                      <label
                        for="checkbox-${e.id}"
                        class="checkbox-select-employee-label ${e.selected?"selected":""}"
                        aria-label="${e.selected?"Label for Unselect the Employee":"Label for Select the Employee"}"
                        >${e.selected?"Unselect":"Select"}</label
                      >

                      <input
                        type="checkbox"
                        class="checkbox-select-employee"
                        name="checkbox-${e.id}"
                        id="checkbox-${e.id}"
                        ?checked="${e.selected}"
                        @change="${t=>this.toggleSelection(t,e)}"
                        aria-checked="${e.selected}"
                        aria-label="${e.selected?"Unselect the Employee":"Select the Employee"}"
                      />

                      <div class="actions-buttons">
                        <button
                          @click=${()=>this.onEdit(e.id)}
                          aria-label="Edit Employee Details"
                        >
                          <p class="actions-buttons-text">
                            <icon-component .icon=${P}></icon-component
                            >Edit
                          </p>
                        </button>

                        <button
                          @click=${()=>this.onDelete(e.id)}
                          aria-label="Delete Employee"
                        >
                          <p class="actions-buttons-text">
                            <icon-component
                              .icon=${f}
                            ></icon-component>
                            Delete
                          </p>
                        </button>
                      </div>
                    </div>
                  `))}
              </div>`:""}

          <!-- Table View -->
          ${"table"===this.viewMode?a` <table
                class="table-view"
                aria-label="Employee List as a Table"
              >
                <thead>
                  <tr>
                    <th>
                      <input
                        type="checkbox"
                        class="checkbox-select-employee"
                        ?checked="${this.selectedEmployeesIDs.length===this.employees.length}"
                        @change="${this.toggleSelectAll}"
                        aria-checked="${this.selectedEmployeesIDs.length===this.employees.length}"
                        aria-label="Select All Employees"
                      />
                    </th>
                    <th aria-label="Table Header for Employee's First Name">
                      First Name
                    </th>
                    <th aria-label="Table Header for Employee's Last Name">
                      Last Name
                    </th>
                    <th
                      aria-label="Table Header for Employee's ${N("labels.dateOfEmployment")}"
                    >
                      ${N("labels.dateOfEmployment")}
                    </th>
                    <th aria-label="Table Header for Employee's ${N("labels.dateOfBirth")}">
                      ${N("labels.dateOfBirth")}
                    </th>
                    <th aria-label="Table Header for Employee's Phone">
                      Phone
                    </th>
                    <th aria-label="Table Header for Employee's Email">
                      Email
                    </th>
                    <th aria-label="Table Header for Employee's Department">
                      Department
                    </th>
                    <th aria-label="Table Header for Employee's Position">
                      Position
                    </th>
                    <th aria-label="Table Header for Employee's Actions">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  ${this.filteredEmployees.map((e=>a`
                      <tr>
                        <td class="checkbox-wrapper">
                          <input
                            type="checkbox"
                            class="checkbox"
                            name="checkbox-${e.id}"
                            id="checkbox-${e.id}"
                            ?checked="${e.selected}"
                            @change="${t=>this.toggleSelection(t,e)}"
                            aria-checked="${e.selected}"
                            aria-label="${e.selected?"Unselect the Employee":"Select the Employee"}"
                          />
                        </td>
                        <td aria-label="Employee's First Name" class="name">
                          ${e.firstName}
                        </td>
                        <td aria-label="Employee's Last Name" class="name">
                          ${e.lastName}
                        </td>
                        <td aria-label="Employee's ${N("labels.dateOfEmployment")}">
                          ${e.dateOfEmployment}
                        </td>
                        <td aria-label="Employee's ${N("labels.dateOfBirth")}">
                          ${e.dateOfBirth}
                        </td>
                        <td aria-label="Employee's Phone">
                          ${e.phoneNumber}
                        </td>
                        <td aria-label="Employee's Email">${e.email}</td>
                        <td aria-label="Employee's Department">
                          ${e.department}
                        </td>
                        <td aria-label="Employee's Position">
                          ${e.position}
                        </td>
                        <td
                          class="actions-buttons"
                          aria-label="Employee's Actions Buttons"
                        >
                          <tooltip-component>
                            <button
                              @click=${()=>this.onEdit(e.id)}
                              aria-label="Edit Employee Details Button"
                            >
                              <icon-component
                                .icon=${P}
                              ></icon-component>
                            </button>
                            <div slot="tooltip">Edit</div>
                          </tooltip-component>
                          <tooltip-component>
                            <button
                              @click=${()=>this.onDelete(e.id)}
                              aria-label="Delete Employee Button"
                            >
                              <icon-component
                                .icon=${f}
                              ></icon-component>
                            </button>
                            <div slot="tooltip">Delete</div>
                          </tooltip-component>
                        </td>
                      </tr>
                    `))}
                </tbody>
              </table>`:""}

          <div class="pagination" aria-label="Pagination">
            <button
              ?disabled="${1===this.currentPage}"
              @click="${()=>this.changePage(this.currentPage-1)}"
              class="pagination-btn prev"
              aria-label="Previous Page Button"
            >
              <
            </button>
            <div>${this.generatePageNumbers()}</div>
            <button
              ?disabled="${this.currentPage===Math.ceil(this.employees.length/this.employeesPerPage)}"
              @click="${()=>this.changePage(this.currentPage+1)}"
              class="pagination-btn next"
              aria-label="Next Page Button"
            >
              >
            </button>
          </div>

          <modal-component
            ?isActive=${this.isModalActive}
            modalTitle="Update Confirmation"
            @confirm=${this.onConfirm}
            @cancel=${this.onCancel}
            aria-label="Modal for Delete Confirmation"
          >
            <div slot="modal-message">
              <p aria-label="Modal's Message">
                Are you sure you want to delete?
              </p>
            </div>
          </modal-component>
        </section>
      `:a`<div class="no-employees">
        <p>${N("warnings.noEmployees")}</p>
        <button
          class="btn-primary"
          @click="${()=>window.location.href="/"}"
        >
        ${N("buttons.homePage")}
        </button>
      </div>`}setPage=e=>{e<1||e>this.totalPages||(this.currentPage=e,this.changeUrl())};generatePageNumbers(){this.totalPages=Math.ceil(this.filteredEmployees.length/this.employeesPerPage);const e=[],t=t=>{e.push(a`
        <button
          class="page-btn ${this.currentPage===t?"active":""}"
          @click=${()=>this.setPage(t)}
        >
          ${t}
        </button>
      `)};t(1),this.currentPage>3&&e.push(a`<span class="page-dots">...</span>`);for(let e=Math.max(2,this.currentPage-1);e<this.currentPage;e++)t(e);1!==this.currentPage&&this.currentPage!==this.totalPages&&t(this.currentPage);for(let e=this.currentPage+1;e<Math.min(this.totalPages,this.currentPage+2);e++)t(e);return this.currentPage<this.totalPages-2&&e.push(a`<span class="page-dots">...</span>`),this.totalPages>1&&t(this.totalPages),e}switchViewMode(e){this.viewMode=e}onEdit(e){window.history.pushState({},"",`/edit/${e}`),window.dispatchEvent(new PopStateEvent("popstate"))}onDelete(e){const t=u.fetchEmployee(e);this.deleteMessage=`Are you sure you want to delete ${t.firstName} ${t.lastName}?`,this.selectedToDeleteID=e,this.isModalActive=!0}onDeleteSelected(){this.selectedEmployeesIDs.length&&(this.isModalActive=!0)}async onConfirm(){try{this.selectedToDeleteID?(u.deleteEmployee(this.selectedToDeleteID),this.employees=u.fetchEmployees(),this.selectedToDeleteID=null):(await Promise.all(this.selectedEmployeesIDs.map((e=>u.deleteEmployee(e)))),this.employees=u.fetchEmployees(),this.selectedEmployeesIDs=[])}catch(e){console.log("Error deleting employee",e)}finally{this.removeModal()}}onCancel(){this.removeModal(),this.selectedToDeleteID=null}removeModal(){this.isModalActive=!1,document.body.classList.remove("modal-open")}toggleSelectAll(e){const t=e.target.checked;this.employees=this.employees.map((e=>({...e,selected:t}))),this.selectedEmployeesIDs=t?this.employees.map((e=>e.id)):[]}toggleSelection(e,t){e.preventDefault();const a=e.target.checked;t.selected=a,this.selectedEmployeesIDs=this.employees.filter((e=>e.selected)).map((e=>e.id))}updateEmployees(){u.updateEmployees(this.employees),this.selectedEmployeesIDs=[],this.requestUpdate()}}customElements.define("employee-list-view",C);const A=new i;A.setRoutes([{path:"/",component:"employee-list-view",action:async()=>{document.title="HR-Lite | Employee List"}},{path:"/add",component:"employee-add-update",action:async()=>{document.title="HR-Lite | Add New Employee",await import("./employee-add-update-view-d2a31646.js")}},{path:"/edit/:id",component:"employee-add-update",action:async()=>{document.title="HR-Lite | Update Employee",await import("./employee-add-update-view-d2a31646.js")}},{path:"(.*)",component:"not-found-view",action:()=>import("./not-found-view-281213a7.js")}]);class T extends b{static styles=o`
    nav {
      margin: 10px 30px;
      padding: 6px 16px;
      display: flex;
      justify-content: space-between;
      background-color: var(--white);
    }

    .brand-logo {
      display: flex;
      align-items: center;
      gap: 16px;
      text-decoration: none;
      cursor: pointer;
    }

    .brand-logo *,
    .brand-logo:hover,
    .brand-logo:active,
    .brand-logo:focus,
    .brand-logo:visited {
      color: var(--ing-dark-gray);
      line-height: 0;
    }

    .nav-menu {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    .nav-links {
      display: flex;
      gap: 10px;
    }

    .nav-link {
      display: flex;
      align-items: center;
      gap: 4px;
      cursor: pointer;
      text-decoration: none;
      padding: 2px 6px;
      border-radius: 3px;
      color: var(--ing-orange);
      fill: var(--ing-orange);
    }

    .nav-link:hover {
      outline: 2px solid var(--ing-orange);
      padding: 2px 6px;
      color: var(--ing-orange);
      fill: var(--ing-orange);
      border-radius: 3px;
    }

    .nav-link:active {
      outline: 2px solid var(--ing-orange);
      padding: 2px 6px;
      color: var(--ing-orange);
      border-radius: 3px;
    }

    .language-switcher{
      background-color: transparent;
      border: none;
      cursor: pointer;
      margin-left: 10px;
      padding-top: 4px;
    }
  `;static properties={selectedLanguage:{type:String}};constructor(){super(),this.selectedLanguage=u.fetchLanguage()}switchLanguage(){"tr"===this.selectedLanguage?this.selectedLanguage="en":this.selectedLanguage="tr",u.setLanguage(this.selectedLanguage),this.requestUpdate()}render(){return a`
      <nav>
        <div class="brand">
          <a class="brand-logo" href="/">
            <icon-component .icon="${M}"></icon-component>
            <p>ING</p>
          </a>
        </div>
        <div class="nav-menu">
          <div class="nav-links">
            <a href="/" class="nav-link home">
              <icon-component .icon="${x}"></icon-component
              >${N("navigation.employees")}</a
            >
            <a href="/add" class="nav-link add">
              <icon-component .icon="${v}"></icon-component>${N("navigation.addNewEmployee")}</a
            >
          </div>
          <button @click=${this.switchLanguage} class="language-switcher">
            <icon-component
              .icon="${"tr"===u.state.language?E:w}"
            ></icon-component>
          </button>
        </div>
      </nav>
    `}}customElements.define("navigation-component",T);class I extends e{connectedCallback(){if(super.connectedCallback(),!document.querySelector("#global-ing-fonts")){const e=document.createElement("style");e.textContent="\n\n      :root{\n      --ing-orange: #ff6200;\n      --ing-blue: #052868;\n      --ing-gray: #f5f5f5;\n      --ing-dark-gray: #333333;\n      --black: #000000;\n      --white: #ffffff;\n      --ing-orange-10: #ff620010;\n      }\n\n      @font-face {\n        font-family: 'INGFont';\n        src: url('./assets/fonts/INGMeWeb-Regular.woff2') format('woff2'),\n             url('./assets/fonts/INGMeWeb-Regular.woff') format('woff');\n        font-weight: normal;\n        font-style: normal;\n      }\n\n      html {\n        background-color: #f5f5f5;\n      }\n        \n      body {\n        font-family: 'INGFont', sans-serif;\n      }\n\n      .modal-open {\n        position: fixed;\n        top: 0;\n        left: 0;\n        overflow: hidden;\n        width: 100%;\n      }\n    ",document.head.appendChild(e)}}constructor(){super(),this.router=A,this.checkLanguage()}checkLanguage(){u.fetchLanguage()?(this.loading=!1,this.requestUpdate()):(u.setLanguage("en"),this.loading=!1,this.requestUpdate())}firstUpdated(){const e=this.shadowRoot.querySelector("#outlet");e&&this.router.setOutlet(e)}render(){const e=u.fetchLanguage();return console.log(e),this.isLoading||!e?a`<div>${N("warnings.loading")}</div>`:a`
      <navigation-component></navigation-component>
      <main>
        <div id="outlet"></div>
      </main>
    `}}window.customElements.define("app-root",I);export{I as A,b as P,s as g,u as s,N as t};
//# sourceMappingURL=app-f802e1bb.js.map
