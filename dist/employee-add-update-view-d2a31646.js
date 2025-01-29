import{css as e,html as t}from"lit";import{P as a,s as o,t as i}from"./app-f802e1bb.js";import"@vaadin/router";import"lit-element-state";class l extends a{static styles=e`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .employee-form {
      max-width: 1000px;
      width: 100%;
      margin: 0 auto;
      padding: 20px 56px;
      background-color: #f9f9f9;
      border-radius: 8px;
      box-shadow: 0 6px 8px var(--ing-orange-10);
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }

    .employee-form div {
      margin-bottom: 15px;
    }

    .employee-form * {
      font-family: 'INGFont', sans-serif;
    }

    label {
      display: block;
      font-weight: bold;
      margin-bottom: 5px;
    }

    input,
    select,
    button {
      width: 100%;
      padding: 10px;
      font-size: 16px;
      border: 2px solid #ccc;
      border-radius: 4px;
      transition: border-color 0.3s;
    }

    input:focus,
    select:focus,
    button:focus {
      border-color: var(--ing-orange);
      outline: none;
    }

    .department-radio-group {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
      margin-top: 32px;
    }

    .department-radio-group input[type='radio'] {
      width: 20px;
    }

    .department-radio-group label {
      margin: 0;
      padding: 0;
    }

    #analytics {
      margin-left: 48px;
    }

    input[type='radio'] {
      width: 20px;
      height: 20px;
      border: 2px solid var(--ing-orange);
      border-radius: 50%;
      appearance: none;
      background-color: var(--white); 
      transition: background-color 0.3s ease;
    }

    input[type='radio']:checked {
      background-color: var(--ing-orange);
      border-color: var(--white);
    }

    input[type='radio']:focus {
      outline: none;
      border-color: var(--white);
    }

    .position-select {
      margin-top: 10px;
    }

    .position-select * {
      font-family: 'INGFont', sans-serif;
    }

    button[type='submit'] {
      background-color: var(--ing-orange);
      color: white;
      border: none;
      cursor: pointer;
      font-size: 16px;
      grid-column: span 2;
    }

    button[type='submit']:hover {
      color: var(--ing-blue);
      background-color: transparent;
      outline: 2px solid var(--ing-blue);
    }

    @media (max-width: 768px) {
      .employee-form {
        padding: 15px;
        grid-template-columns: 1fr;
      }

      input,
      select,
      button {
        padding: 12px;
        font-size: 14px;
      }

      #analytics {
      margin-left: 0;
    }


      .department-radio-group {
        align-items: flex-start;
      }

      button[type='submit'] {
        font-size: 14px;
      }
    }

    @media (max-width: 480px) {
      .employee-form {
        padding: 10px;
      }

      input,
      select,
      button {
        padding: 10px;
        font-size: 12px;
      }

      button[type='submit'] {
        font-size: 14px;
      }
    }
  `;static properties={employeeData:{type:Object},isUpdate:{type:Boolean},employeeID:{type:Number},isModalActive:{type:Boolean},confirmed:{type:Boolean}};constructor(){super(),this.employeeData={firstName:"",lastName:"",dateOfEmployment:"",dateOfBirth:"",phoneNumber:"",email:"",department:"",position:""},this.isUpdate=!1,this.isModalActive=!1,this.confirmed=!1}async firstUpdated(){this.employeeID&&(this.isUpdate=!0,this.employeeData=await o.fetchEmployee(this.employeeID))}connectedCallback(){super.connectedCallback(),this.addEventListener("modal-closed",this.handleModalClosed)}disconnectedCallback(){this.removeEventListener("modal-closed",this.handleModalClosed),super.disconnectedCallback()}handleModalClosed(e){this.isModalActive=e.detail.isActive}render(){return t`
      <form @submit=${this.onSubmit} class="employee-form">
        <div>
          <label for="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            @input=${this.onInput}
            value=${this.employeeData.firstName}
            required
            aria-label="Input for First Name"
            class="name-input first"
          />
        </div>
        <div>
          <label for="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            @input=${this.onInput}
            value=${this.employeeData.lastName}
            required
            aria-label="Input for Last Name"
            class="name-input last"
          />
        </div>
        <div>
          <label for="phoneNumber"
            >Phone Number <small>Format: +901234567890 </small></label
          >
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            @input=${this.onInput}
            value=${this.employeeData.phoneNumber}
            required
            aria-label="Input for Phone Number"
            class="phone-input"
          />
        </div>
        <div>
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            @input=${this.onInput}
            value=${this.employeeData.email}
            required
            aria-label="Input for Email"
            class="email-input"
          />
        </div>
        <div>
          <label for="dateOfBirth">${i("labels.dateOfBirth")}</label>
          <input
            type="date"
            name="dateOfBirth"
            placeholder="${i("labels.dateOfBirth")}"
            @input=${this.onInput}
            value=${this.employeeData.dateOfBirth}
            required
            aria-label="Input for ${i("labels.dateOfBirth")}"
            class="date-input date-of-birth"
          />
        </div>
        <div>
          <label for="dateOfEmployment">${i("labels.dateOfEmployment")}</label>
          <input
            type="date"
            name="dateOfEmployment"
            placeholder="${i("labels.dateOfEmployment")}"
            value=${this.employeeData.dateOfEmployment}
            @input=${this.onInput}
            required
            aria-label="Input for ${i("labels.dateOfEmployment")}"
            class="date-input date-of-employment"
          />
        </div>
        <div>
          <label for="department">Department</label>
          <div class="department-radio-group">
            <input
              type="radio"
              id="tech"
              name="department"
              value="Tech"
              ?checked=${"Tech"===this.employeeData.department}
              @input=${this.onInput}
              required
              aria-label="Input for Tech Department"
              class="department-radio-option"
            />
            <label for="tech">Tech</label>
            <input
              type="radio"
              id="analytics"
              name="department"
              value="Analytics"
              ?checked=${"Analytics"===this.employeeData.department}
              @input=${this.onInput}
              required
              aria-label="Input for Analytics Department"
              class="department-radio-option"
            />
            <label for="analytics">Analytics</label>
          </div>
        </div>
        <div class="position-select">
          <label for="position">Position</label>
          <select
            name="position"
            @input=${this.onInput}
            value="${this.employeeData.position}"
            required
            aria-label="Select the position"
          >
            <option value="">Please choose the position</option>
            <option
              value="Junior"
              ?selected=${"Junior"===this.employeeData.position}
              aria-label="Select the Junior position"
            >
              Junior
            </option>
            <option
              value="Medior"
              ?selected=${"Medior"===this.employeeData.position}
              aria-label="Select the Medior position"
            >
              Medior
            </option>
            <option
              value="Senior"
              ?selected=${"Senior"===this.employeeData.position}
              aria-label="Select the Senior position"
            >
              Senior
            </option>
          </select>
        </div>
        <button type="submit" aria-label="Submit the form" class="submit-btn">
          ${this.isUpdate?"Update the Employee":"Submit New Employee"}
        </button>
      </form>

      <modal-component
        ?isActive=${this.isModalActive}
        modalTitle="Update Confirmation"
        @confirm=${this.onConfirm}
        @cancel=${this.onCancel}
        aria-label="Modal for Update Confirmation"
      >
        <div slot="modal-message">
          <p aria-label="Confirmation Modal message">
            Confirm the update the information of
            ${this.employeeData.firstName+" "+this.employeeData.lastName}
          </p>
        </div>
      </modal-component>
    `}onInput(e){const{name:t,value:a}=e.target;this.employeeData={...this.employeeData,[t]:a}}async onSubmit(e){e.preventDefault();try{if(this.isUpdate)return this.isModalActive=!0,void document.body.classList.add("modal-open");await o.addEmployee(this.employeeData),window.location.href="/"}catch(e){console.error("Error:",e)}}removeModal(){this.isModalActive=!1,document.body.classList.remove("modal-open")}async onConfirm(){try{await o.updateEmployee(this.employeeData),this.removeModal(),alert("Form updated successfully!",this.employeeData),window.location.href="/"}catch(e){console.log("Error:",e)}finally{this.showConfirmModal=!1}}onCancel(){this.removeModal()}}customElements.define("employee-form",l);class n extends a{static styles=e`
    :host {
      display: block;
      padding: 20px 56px;
    }
    .page-title {
      text-align: center;
      color: var(--ing-orange);
    }
  `;static properties={id:{type:Number}};constructor(){super();const e=window.location.pathname.split("/"),t=e[e.length-1];this.id=t}render(){return t`
      ${this.id?t`<h1
            class="page-title"
            aria-label="Page title for Update Employee"
          >
            Update Employee
          </h1>`:t`<h1
            class="page-title"
            aria-label="Page title for Add New Employee"
          >
            Add Employee
          </h1>`}
      <employee-form .employeeID="${this.id}"></employee-form>
    `}}customElements.define("employee-add-update",n);export{n as EmployeeAddUpdate};
//# sourceMappingURL=employee-add-update-view-d2a31646.js.map
