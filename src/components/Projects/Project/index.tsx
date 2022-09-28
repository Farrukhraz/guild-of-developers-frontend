import React, { FC, useState, useCallback } from 'react';
import { ArrowDown, ArrowUp } from './Icon';
import {
  CardButton,
  Card,
  CardTitle,
  CardDate,
  CardDepartments,
  CardDepartment,
  Stack,
  StackItem
} from './style';

export interface ProjectProps {
  el: {
    id: string;
    title: string;
    description: string;
    finished: boolean; // не используется
    startDate: string;
    finishedDate: string; // не используется
    url: string; // не используется
    registrationFormUrl: string;
    departments: {
      name: string;
      stack: string[];
    }[];
    imageUrl: string; // не используется
    fond: string; // не используется
    participants: string; // не используется
    todo: string[]; // не используется
    WhatYouGet: string[]; // не используется
  };
}

const Project: FC<ProjectProps> = ({ el }) => {
  const [toggle, setToggle] = useState('');

  const handleSetToggle = useCallback(
    (name: string) => (toggle === name ? setToggle('') : setToggle(name)),
    [setToggle, toggle]
  );

  return (
    <Card
      onClick={() => {
        setToggle('');
      }}
    >
      <CardDate>{el.startDate}</CardDate>
      <CardTitle to={`/projects/${el.id}`}>«{el.title}»</CardTitle>
      <CardDepartments>
        {el.departments.map((department) => (
          <CardDepartment
            key={department.name}
            dep={department.name}
            toggle={toggle}
            onClick={(e) => {
              e.stopPropagation();
              handleSetToggle(department.name);
            }}
          >
            <p>
              {department.name}
              {toggle === department.name ? <ArrowUp /> : <ArrowDown />}
            </p>

            <Stack>
              {toggle === department.name
                ? department.stack.map((stack) => <StackItem key={stack}>{stack}</StackItem>)
                : ''}
            </Stack>
          </CardDepartment>
        ))}
      </CardDepartments>
      {/* TODO: ниже веременный костыль т.к. не у всех карточек есть ссылки на форму регистрации */}
      {el.registrationFormUrl !== '' ? (
        <CardButton href={el.registrationFormUrl} target="_blank">
          Записаться
        </CardButton>
      ) : (
        <CardButton href="#">Записаться</CardButton>
      )}
    </Card>
  );
};

export default Project;
