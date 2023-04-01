--
-- PostgreSQL database dump
--

-- Dumped from database version 13.9 (Ubuntu 13.9-1.pgdg20.04+1)
-- Dumped by pg_dump version 13.9 (Ubuntu 13.9-1.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: medical_speciality; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.medical_speciality AS ENUM (
    'OPHTHALMOLOGY',
    'PEDIATRICS',
    'CARDIOLOGY',
    'DERMATOLOGY',
    'GYNECOLOGY_AND_OBSTETRICS',
    'UROLOGY',
    'GENERAL_PRACTICE'
);


--
-- Name: status_appointments; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.status_appointments AS ENUM (
    'MARKED',
    'STARTED',
    'FINISHED'
);


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: doctors; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.doctors (
    id integer NOT NULL,
    user_id integer NOT NULL,
    specialily public.medical_speciality NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    localization character varying(100) NOT NULL
);


--
-- Name: doctors_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.doctors_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: doctors_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.doctors_id_seq OWNED BY public.doctors.id;


--
-- Name: medical_appointments; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.medical_appointments (
    id integer NOT NULL,
    doctor_id integer NOT NULL,
    date date NOT NULL,
    start_time time without time zone NOT NULL,
    end_time time without time zone NOT NULL,
    status public.status_appointments DEFAULT 'MARKED'::public.status_appointments NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    patient_id integer NOT NULL
);


--
-- Name: medical_appointments_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.medical_appointments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: medical_appointments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.medical_appointments_id_seq OWNED BY public.medical_appointments.id;


--
-- Name: patients; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.patients (
    id integer NOT NULL,
    user_id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: patients_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.patients_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: patients_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.patients_id_seq OWNED BY public.patients.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    email character varying(100) NOT NULL,
    password character varying(100) NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: doctors id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.doctors ALTER COLUMN id SET DEFAULT nextval('public.doctors_id_seq'::regclass);


--
-- Name: medical_appointments id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.medical_appointments ALTER COLUMN id SET DEFAULT nextval('public.medical_appointments_id_seq'::regclass);


--
-- Name: patients id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.patients ALTER COLUMN id SET DEFAULT nextval('public.patients_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: doctors; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.doctors VALUES (8, 9, 'OPHTHALMOLOGY', '2023-04-01 15:57:38.70841-03', 'Chapecó');
INSERT INTO public.doctors VALUES (9, 10, 'GYNECOLOGY_AND_OBSTETRICS', '2023-04-01 16:11:19.793746-03', 'Manaus');
INSERT INTO public.doctors VALUES (10, 11, 'PEDIATRICS', '2023-04-01 16:11:33.946259-03', 'Recife');
INSERT INTO public.doctors VALUES (11, 12, 'DERMATOLOGY', '2023-04-01 16:11:43.177987-03', 'Salvador');
INSERT INTO public.doctors VALUES (12, 13, 'CARDIOLOGY', '2023-04-01 16:11:54.009297-03', 'Porto Alegre');
INSERT INTO public.doctors VALUES (13, 14, 'UROLOGY', '2023-04-01 16:12:02.301432-03', 'Belo Horizonte');
INSERT INTO public.doctors VALUES (14, 15, 'GYNECOLOGY_AND_OBSTETRICS', '2023-04-01 16:12:10.161013-03', 'Curitiba');
INSERT INTO public.doctors VALUES (15, 16, 'OPHTHALMOLOGY', '2023-04-01 16:12:16.93171-03', 'Brasília');
INSERT INTO public.doctors VALUES (16, 17, 'PEDIATRICS', '2023-04-01 16:12:23.693328-03', 'Rio de Janeiro');
INSERT INTO public.doctors VALUES (17, 18, 'DERMATOLOGY', '2023-04-01 16:12:31.637454-03', 'São Paulo');


--
-- Data for Name: medical_appointments; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: patients; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.patients VALUES (1, 19, '2023-04-01 16:15:00.061116-03');
INSERT INTO public.patients VALUES (2, 20, '2023-04-01 16:15:10.043583-03');
INSERT INTO public.patients VALUES (3, 21, '2023-04-01 16:15:16.794531-03');
INSERT INTO public.patients VALUES (4, 22, '2023-04-01 16:15:33.240583-03');
INSERT INTO public.patients VALUES (5, 23, '2023-04-01 16:15:38.733884-03');
INSERT INTO public.patients VALUES (6, 24, '2023-04-01 16:15:45.528977-03');
INSERT INTO public.patients VALUES (7, 25, '2023-04-01 16:15:50.069345-03');
INSERT INTO public.patients VALUES (8, 26, '2023-04-01 16:15:56.00905-03');
INSERT INTO public.patients VALUES (9, 27, '2023-04-01 16:16:01.807863-03');
INSERT INTO public.patients VALUES (10, 28, '2023-04-01 16:16:06.942896-03');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (9, 'Jucatigre Stanton', 'jucatigre@gmail.com', '$2b$10$BeSG2Jx6GZPGyg6Mbw1iU.es2ociRNvKNLIEPSYyXz.GPc21O7.R2', '2023-04-01 15:57:38.703996-03');
INSERT INTO public.users VALUES (10, 'Luiza Martins', 'luiza.martins@gmail.com', '$2b$10$TI45mWWsEDb2VcBK19x6bO8kk5PQ../Kgcta8.sr4CdoP7MGoFI1q', '2023-04-01 16:11:19.790541-03');
INSERT INTO public.users VALUES (11, 'Vinicius Souza', 'vinicius.souza@gmail.com', '$2b$10$hHoIQ3Ls2ZGNlVsjzsHRwufZ8qf7pPPTHTtzxN4cdLAXQtDHMNGL6', '2023-04-01 16:11:33.942644-03');
INSERT INTO public.users VALUES (12, 'Isabella Ferreira', 'isabella.ferreira@gmail.com', '$2b$10$Sx1s5GyJ2nw/9KnNtHgbaer.gQrTNsdiXJH1W1kyq3QT6BJXRVvHi', '2023-04-01 16:11:43.175769-03');
INSERT INTO public.users VALUES (13, 'Thiago Rodrigues', 'thiago.rodrigues@gmail.com', '$2b$10$IPx9seXq7tb7nee6z3I9HeRgxlg/5XiegVZVRX9tre.qaNEvPPQS2', '2023-04-01 16:11:54.006973-03');
INSERT INTO public.users VALUES (14, 'Julia Santos', 'julia.santos@gmail.com', '$2b$10$F01N6/YmBz6nKqNQoW3C1eBZrq//afjTwueSS2LCWRtzYahiku2Py', '2023-04-01 16:12:02.298659-03');
INSERT INTO public.users VALUES (15, 'Gustavo Silva', 'gustavo.silva@gmail.com', '$2b$10$Nw5ADPmzsCUSLeBUBdFFTOqst3THm90ZCqch0vj/lyLmZguqhgHyq', '2023-04-01 16:12:10.158726-03');
INSERT INTO public.users VALUES (16, 'Mariana Costa', 'mariana.costa@gmail.com', '$2b$10$TiWMwR0dtjMW010IJtVE3uiWpcLQmQDWJVuJsXB5ru68K3RQ.LGLK', '2023-04-01 16:12:16.9298-03');
INSERT INTO public.users VALUES (17, 'Lucas Oliveira', 'lucas.oliveira@gmail.com', '$2b$10$uOSZY4HOUM9uWVavk5DJyOoVZZFMdWqY6YtmaDO8Zo.sy2lUVJ57W', '2023-04-01 16:12:23.690252-03');
INSERT INTO public.users VALUES (18, 'Rafaela Sousa', 'rafaela.sousa@gmail.com', '$2b$10$.UWDrowU/0MLIaV2AibabO4TbcO4ybixYDa5vVYcrfKizYeOBs7MC', '2023-04-01 16:12:31.634932-03');
INSERT INTO public.users VALUES (19, 'Maria Souza', 'maria.souza@example.com', '$2b$10$BI.cGkqH3DR4p6VY052jgus0d.9EEe9yU/aJeCsteIAymgIBZ7gdO', '2023-04-01 16:15:00.058402-03');
INSERT INTO public.users VALUES (20, 'Rafael Oliveira', 'rafael.oliveira@example.com', '$2b$10$AtkFq8iqIVlOQq4bGrkhGebnvNmRliS4dOcSyL.E7NQCR5X0iu6ae', '2023-04-01 16:15:10.041241-03');
INSERT INTO public.users VALUES (21, 'Ana Pereira', 'ana.pereira@example.com', '$2b$10$oPL4pQhoCrj1QM5UOWyp5ewq1wwJCGZ520wJv71Cgh0PDx.M2mfMC', '2023-04-01 16:15:16.79202-03');
INSERT INTO public.users VALUES (22, 'Lucas Costa', 'lucas.costa@example.com', '$2b$10$Cg5pBgOcjjU2VSwtVtPseuyHr1T92eVUSqnDI0bm.IWszyorndHIe', '2023-04-01 16:15:33.235553-03');
INSERT INTO public.users VALUES (23, 'Juliana Santos', 'juliana.santos@example.com', '$2b$10$BP38pOACkf1D8Mlb/dnr2.Qm7wMarvhbmBd.8oBm3Rwom4gF9n9eC', '2023-04-01 16:15:38.729275-03');
INSERT INTO public.users VALUES (24, 'Gabriel Alves', 'gabriel.alves@example.com', '$2b$10$4EyHt0m4i1sf8uXhUQylf.dHPlGtsI9i/JI4.IAHTsSQGNhFY8Tvy', '2023-04-01 16:15:45.516747-03');
INSERT INTO public.users VALUES (25, 'Larissa Rodrigues', 'larissa.rodrigues@example.com', '$2b$10$QwaMLUHDgBXYzTDVAlPBbuoTUY6eOEtpFULuuWu3O3cs5Sjvknku.', '2023-04-01 16:15:50.067037-03');
INSERT INTO public.users VALUES (26, 'Pedro Barbosa', 'pedro.barbosa@example.com', '$2b$10$ZsnwoMPZ/T10dOcAOsBEReLtY0m7z6eLHHmY32ePQtmyw8ElI2Kxq', '2023-04-01 16:15:56.00686-03');
INSERT INTO public.users VALUES (27, 'Isabella Ferreira', 'isabella.ferreira@example.com', '$2b$10$XTSucFR9LAOJa3JFobr86uVZrXxnFnOVUyeTStzFppqL9gjo92vIu', '2023-04-01 16:16:01.805517-03');
INSERT INTO public.users VALUES (28, 'Vitoria Gomes', 'vitoria.gomes@example.com', '$2b$10$C7agvAt0FueJi9irHSp1OeyEpYMqowudJCCQzdJZ6xdaq.NeC5FZK', '2023-04-01 16:16:06.940543-03');


--
-- Name: doctors_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.doctors_id_seq', 17, true);


--
-- Name: medical_appointments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.medical_appointments_id_seq', 1, false);


--
-- Name: patients_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.patients_id_seq', 10, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 28, true);


--
-- Name: doctors doctors_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.doctors
    ADD CONSTRAINT doctors_pk PRIMARY KEY (id);


--
-- Name: medical_appointments medical_appointments_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.medical_appointments
    ADD CONSTRAINT medical_appointments_pk PRIMARY KEY (id);


--
-- Name: patients patients_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.patients
    ADD CONSTRAINT patients_pk PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pk PRIMARY KEY (id);


--
-- Name: doctors doctors_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.doctors
    ADD CONSTRAINT doctors_fk0 FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: medical_appointments medical_appointments_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.medical_appointments
    ADD CONSTRAINT medical_appointments_fk0 FOREIGN KEY (patient_id) REFERENCES public.patients(id);


--
-- Name: medical_appointments medical_appointments_fk1; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.medical_appointments
    ADD CONSTRAINT medical_appointments_fk1 FOREIGN KEY (doctor_id) REFERENCES public.doctors(id);


--
-- Name: patients patients_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.patients
    ADD CONSTRAINT patients_fk0 FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

