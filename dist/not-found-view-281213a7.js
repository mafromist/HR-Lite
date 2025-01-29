import{LitElement as t,css as e,html as o}from"lit";import{g as n}from"./app-f802e1bb.js";import"@vaadin/router";import"lit-element-state";class i extends t{static styles=[n,e`
    .not-found-view {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      font-family: var(--font-family);
    }

  `];render(){return o`
      <div class="not-found-view">
        <h1>URL not found!</h1>
        <p>Please check your URL.</p>
        <button
          class="btn-primary"
          @click="${()=>window.location.href="/"}"
        >
          Go to back to Employee List
        </button>
      </div>
    `}}customElements.define("not-found-view",i);export{i as NotFoundView};
//# sourceMappingURL=not-found-view-281213a7.js.map
