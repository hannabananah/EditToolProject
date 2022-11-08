Edit Tool Project
포토앨범

0. 수연님이 보내준 카톡에 절대경로 방법 있음
1. 이미지(인풋 태그 사용), 텍스트 버튼 만들기
2. 이미지 파일 onChange={onSelectFile} 설정=> onSelectFile 함수 설정, e.target.files 선택(files 정보 가져오기)
   2-1. 배열인지 아닌지 확인하는 방법: (객체는 배열 함수를 사용불가) Array.isArray(object) true 가 뜨면 배열함수 사용 가능
   2-2. 객체를 배열로 만들기: Array.from(object)
   2-3. createObjectURL 소스를 URL로 바꿔줌
3. return문 작성
4. TextInput 작성
    4-1. TextInput 컴포넌트 안에 onClickButton 함수작성
*클래스형이 아닌 함수형은 import React from "react"; 를 불러오지 않아도 됨

*데이터베이스 저장소 필요(클라우디너리로 사진이 전송되도록)


*import HTMLFlipBook from "react-pageflip";
이용해서 책 넘기는 효과 적용하기 해야됨