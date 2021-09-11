import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }
  
  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
  
  .paginationItemStyle {
	margin-left: 5px;
	.page-link {
		color: #fff
	}
	&.page-item {
		&.active {
			button {
				background-color: green;
				border-color: green;
			}
		}
	}
}

.paginationLinkStyle {
	background-color: #b90000;
	border-radius: 5px;
	&:hover {
		background-color: #772e2e;
	}
	&:active {
		background-color: #772e2e;
	}
}
`;
