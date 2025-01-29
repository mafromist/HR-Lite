export const globalStyles = new CSSStyleSheet();
globalStyles.replaceSync(`
      .btn-primary {
        background-color: var(--ing-orange);
        color: var(--white);
        padding: 8px 16px;
        font-size: 16px;
        outline: none;
        border: none;
        cursor: pointer;
        border-radius: 5px;
      }

      .btn-primary:hover {
        background-color: transparent;
        color: var(--ing-blue);
        outline: 2px solid var(--ing-blue);
      }

       .btn-primary.small {
        font-size: 12px;
      }
`);
