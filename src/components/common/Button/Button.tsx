import styled from 'styled-components'

const Button = styled.button`
	padding: 5px;
	border: 1px solid rgb(213, 213, 213);
	border-radius: 5px;
	font-size: 20px;
	&:hover {
		transform: scale(1.05);
		box-shadow: 0 0 10px 2px #d4dee5;
		background: #d4dee5;
	}
`

export default Button
