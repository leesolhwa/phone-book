import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import style from "./SearchBox.module.css";

const SearchBox = () => {
	const [keyword,setKeyword] = useState();	//키워드값(입력값)을 인식하게
	let dispatch = useDispatch();

	const searchByName = (e) =>{
		e.preventDefault();
		dispatch({type:'SEARCH_BY_NAME', payload:{keyword}})
	}

	return (
		<form action="" className={style.form} onSubmit={searchByName}>
			<Row>
				<Col xs>
					<Form.Control
						type="text"
						placeholder="Enter the name"
						onChange={(e)=>setKeyword(e.target.value)}
					/>
				</Col>
				<Col xs="auto">
					<Button variant="secondary" type="submit">
						Find
					</Button>
				</Col>
			</Row>
		</form>
	);
};

export default SearchBox;
