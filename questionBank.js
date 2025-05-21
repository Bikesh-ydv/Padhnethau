export const questionBank = {
    COA: {
        name: "COA",
        contributors: ["admin"],
        chapters: {
            chapter01: {
                name: "Chapter01",
                questions: {
                    q1: {
                        title: "Introduction",
                        content: "1. Distinguish between computer organization and architecture. Explain instruction cycle state diagram with interrupt handling.\n\n2. Explain instruction cycle state diagram. Describe PCI bus configuration.\n\n3. Discuss about the usage of Multiple Hierarchical Bus Architecture over single bus system. \n\n4. Define structure and function of a computer system. Draw instruction cycle state diagram with interrupt.\n\n5.Explain about the structural and functional viewpoint of a computer. Explain different elements of bus design.\n\n6. Explain different types of bus arbitration and compare them .\n\n7. Differentiate between computer organization and architecture. Compare and explain the bus structure of typical computer system. \n\n8. Draw the instruction cycle state diagram with example.  ",
                        contributor: "Admin",
                        date: "",
                        approved: true
                    },
                }
            },
            chapter02: {
                name: "Chapter02",
                questions: {
                    q1: {
                        title: "Central processing Unit",
                        content: "1.  Write down the code to evaluate Y=(A-B/C*[D+(E*G)] in three address, two address,one address and zero address instruction format.(8) [2081-BR]\n\n2. Explain the data transfer instruction with example. Differentiate between Immediate and direct addressing modes.(4+4) [2081-BR] \n\n3. Write program for N = ((P-QxR)/S)+((T/U)+VxW) using three address, two address, one address and zero address instruction format. consider N, P, Q, R, S, T, U, V and W as memory location.(8)[2081-BB] \n\n4. write down the different types of addressing modes and explain each of them with advantages and disadvantages.(8) [2081-BB] \n\n5. Design a 1- bit ALU which can perform addition, AND, OR, and XOR operations. Explain the different types of instruction format.(4+4)  [2080-BR] \n\n6. What is addressing mode? Explain about different types of addressing mode with suitable example.(2+6) [2080-BR] \n\n7. Write down the code to evaluate X = (A-B+C*(D*E-F))/G+H*K in three address, two address, one address and zero address instruction formats.(8)  [2080-Ba.B] \n\n8. What are the different types of addressing modes? Compare them with advantages and disadvantages.(2+6) [2080-BaB] \n\n9. Write a code for X = ((A+B)/C) +(D-E) using three address, two address, one address and zero address instruction format.(8) [2079-BR] \n\n10. List out the different types of addressing modes and explain each of them with suitable example.(8) [2079-BR] \n\n11. Explain different types of data manipulation instructions with example.(8) [2078-BR] \n\n12. . Explain the component of CPU. Comparison between RISC and CISC architecture.(2+6) [2078-BR]. \n\n 13.Write down the code for Y= (A-B/C) x (D+ExG)/F using three address, two address, one address and zero address instruction format.(8) [2078-KB]",
                        contributor: "admin",
                        date: "",
                        approved: true
                    }
                }
            },
            Chapter03: {
                name: "Chapter03",
                questions: {
                    q1: {
                        title: "Control Unit",
                        content: "1. Write a microprogram for the fetch cycle and addition cycle. Explain the microinstruction format with example.(5+5)  [2081-BR]\n\n2. Explain the micro instruotion format. Difference between symbolic and binary micro instruction.(4+4)  [2081-Ba.B] \n\n3. Explain address sequencing with the help of block diagram. Describe micro-instruction format in detail.(5+3)  [2080-BR] \n\n4. Differentiate between hardwired ancl micro programmed control unit.Explain with blockdiagram of microprogrammed control unit.(5+5)  [2080-Ba.B] \n\n5. Describe the operation of hardwired control unit with a typical block diagram. Explain the operation of microprogram sequencer used in microprogrammed control unit.(5+5)  [2079-BR] \n\n6. Explain the organization structure of a microprogram control unit and the generation cf control signals using microprogram.(10)  [2078-BR] \n\n7. Write down the symbolic microprogram for fetch routine and addition execute routine Explain with diagram the working of microprogram sequencer for control memory.(4+6) [2078-KB]",
                        contributor: "admin",
                        date: "",
                        approved: true
                    }
                }
            },
            chapter04: {
                name: "Chapter04",
                questions: {
                    q1: {
                        title: "Pipeline and Vector processing",
                        content: "1. What is pipelining? Describe four stage instruction pipeline. Explain the classification of computer system.(1+4+4) [2081-BR]\n\n2. Construct time-space diagram for four instructions with four-stage pipeline and show how pipelining reduces the execution time? Explain arithmetic pipeline for solving floatingpoint addition/subtraction.(5+5)  [2081-BB] \n\n3. Show that the Speedup factor for a Pipelined Processor is equal to the number of stages in a pipeline. Explain about the different types of conflicts that can be seen in a pipeline.(4+6)  [2080-BR] \n\n4. How can we prove that pipelining improves  the performance of a computer? Explain the operation of instruction pipeline ibr processing four segment instruction cycle with the help of space-time diagram.(4+6) [2080-Ba.B] \n\n5. Explain arithmetic pipelining with example. Describe different types of pipeline hazards with example.(4+6)  [2079-BR] \n\n6. What is meant by hazard in pipelining? Explain with example data and control hazards in pipeiine conflict.(4+6)  [2078-BR]",
                        contributor: "admin",
                        date: "",
                        approved: true
                    }
                }
            },
            chapter05: {
                name: "Chapter05",
                questions: {
                    q1: {
                        title: "Computer Arithmetic",
                        content: "1. Draw a flowchart for Booth's multiplication algorithm for signed multiplication. Multiply 6X7 using Booth's multiplication algorithm.(5+5) [2081-BR]\n\n2. Explain the floating-point addition and subtraction process with example.(3+3) [2081-BR] \n\n3. Draw the flowchart for Restoring Division. Divide 11/5 using restoring division.(4+6) [2081-Ba.B] \n\n4. Multiply 10 x (-7) using Booth's multiplication algorithm.(6) [2081-Ba.B] \n\n 5. Explain booth's algorithm. Multiply (9 x-4) using Booth's multiplication algorithm.(4+6)  [2080-BR] \n\n6. Compare restoring division algorithm with non restoring division algorithm.(6) [2080-BR] \n\n7.Explain non-restoring division algorithm with flow-chart and also divide l2/5 using same algorithm.(5+5) [2080-Ba.B] \n\n8. Multiply -6x7 using Booths multiplication aigorithm.(6) [2080-Ba.B] \n\n9. Draw the flowchart for Non-Restoring Division. Perform 13/5 using restoring division.(4+6) [2079-BR]\n\n10. Explain floating point addition and subtraction algorithm with an example.(6) [2079-BR] \n\n11. Explain the non-restoring division algorithm for division. Divide 10/5 using non-restoring division.(5+5) [2078-BR] \n\n12. Explain the floating point addition and subtraction process using flow chart.(3+3) [2078-BR]",
                        contributor: "admin",
                        date: "",
                        approved: true
                    }
                }
            },
            chapter06: {
                name: "Chapter06",
                questions: {
                    q1: {
                        title: "Memory system",
                        content: "1.  Describe the cache memory principles. Differentiate between direct mapping and set associative mapping.(3+5) [2081-BR] \n\n2. Expiain in briefly the characteristics of a memory system.(3) [2081-Ba.B] \n\n3. Explain direct Cache mapping technique with example. Expiain different write policy techniques in cache memory.(7+3) [2080-BR] \n\n4. What is set associative mrpping? Explain how it combines the feature of direct and associated mapping technique. Explain different replacement algorithm techniques used in cache memory.(2+3+3) [2080-Ba.B] \n\n5. Describe how Set-Associative Mapping works in Cache memory mapping. Explain different write policy techniques in cache memory.(2079-BR) \n\n6.  Explain Least Recently Used (LRU) replacement algorithm in case of hit and miss with suitable example \n\n7.  Expiain various mapping methods used in cache memory organization and compare each of them with example(10) [2078-KB]\n\n8. Define cache mapping techniques. Explain direct mapping technique with suitable diagram. Why replacement algorithm is necessary in associative mapping? Justify.(2+4+4) [2076-CR]",
                        contributor: "admin",
                        date: "",
                        approved: true
                    }
                }
            },
            chapter07: {
                name: "Chapter07",
                questions: {
                    q1: {
                        title: "Input-Output organization",
                        content: "1. Compare and contrast between programmed I/O and interrupt driven I/O. Explain the CPU and IOP communication channel using diagram.(5+5) [2081-BR]\n\n2 Why IOP is used in input-output organization? With the help of a neat diagram, explain how DMA technique is used to transfer data in a computer system.(3+7) [2081-Ba.B] \n\n3. Explain three I/O techniques for input of a block of data, Show the role of I/O processor to assist the operation of the CPU.(6+4) [2080-BR] \n\n4. Explain CPU-IOP Communication with diagram. Explain DMA controller with suitable block diagram.(5+5) [2080-Ba.B]\n\n5. Elaborate the roles of I/O interface in a computer system. Expiain how data transfer is performed with programmed I/o technique with necessary diagram.(10) [2079-BR]\n\n6.  Differentiate between isolated and memory mapped Input-output. Explain with block           diagram of DMA transfer in a computer system.(4+6) [2078-BR] \n\n7. Explain with block diagram of DMA controller. How DMA techniques is different from programmed Input-Output? (6+4) [2078-KB]",
                        contributor: "admin",
                        date: "",
                        approved: true
                    }
                }
            },
             chapter08: {
                name: "Chapter08",
                questions: {
                    q1: {
                        title: "Multiprocessors",
                        content: "1. Briefty discuss on inter-processor communication and synchronization.(5) [2081-BR]\n\n2. Discuss about loosely-coupled and tightly-coupled architecture.(4) [2081-Ba.B] \n\n3. List out.the characteristics of a Multiprocessor.(4) [2080-BR]\n\n4. . Explain the crossbar switch interconnection structure with block diagram.(4) [2080-Ba.B]\n\n5. Compare and contrast the interconnection structures used in multiprocessing environment.(4) [2079-BR]\n\n6. Compare and contrast the interconnection structures used in multiprocessor system.(4) [2078-BR] \n\n7. Differentiate between tightly coupled multiprocessor and loosely coupled multiprocessor.(4) [2078-KB]\n\n8. Discuss about hrpercube interconnection network with example.(4) [2076-CR]",
                        contributor: "admin",
                        date: "",
                        approved: true
                    }
                }
            }
        },
        pastPapers: {
            paper1: {
                year: "Upto 2081",
                title: "COA Past Year Paper",
                filename: "coa3.pdf"
            }
        }
    },
    EE: {
        name: "EE",
        contributors: ["admin"],
        chapters: {
            chapter01: {
                name: "Chapter01",
                questions: {
                    q1: {
                        title: "Introduction",
                        content: "1. Explain with a suitable example that Engineers play key role in making economic decision of  a project(4) [081-R]\n\n2. Briefly explain different types of cash flow used in economic equivalence with suitable example.(4) [081-R]\n\n3. How an engineer plays an important role in making the economic decisions? Explain.(4) [081-B]\n\n4. Explain tbe principle of engineering economics.(4) [080-R]\n\n5. Explain the roles of engineer in economic decision of any enterprise,(4)[080-B]\n\n6. 'Engineers are good decision-makers'. Justify this statement.(4) [079-R]",
                        contributor: "admin",
                        date: "",
                        approved: true
                    }
                }
            },
             chapter02: {
                name: "Chapter02",
                questions: {
                    q1: {
                        title: "Interest and Time Value of Money",
                        content: "1. How many deposits of Rs.25,000 should make per month so that final accumulation amount will be Rs. 10,00,000 if the bank interest rate is 6% per year.(4) [081-R]\n\n2. a) Suppose that you are planning to deposit the sum of Rs 10, 000 at the end of each months for the next 5 years in a bank whicg gives the interest rate of 12% compounded quarterly. What will be the maturity of the deposit after 10 years?.(4) [081-B]\n\n3. A process engineer starts investing his money when he graduates from college. He is able to afibrd investing $25,000 a year from the time he graduates in four years until the end of eight-years. He also plans to invest an additional $ 5,000 per year (increasing by $5,000 per year) at the end of the year after he graduates until year eight . How much will the process engineer  have saved by the end of year eight and what is its present worth if the interest rate 10% compounding monthly?.(6) [081-B]\n\n4. Explain the concept of 'time value of money' and 'interest payment schemes' with suiiable examples.(2+2) [080-R]\n\n5.while you are planning to deposit Rs 5000 in 3-months intervai for 4 years in increasing trend at a 2.5 %  growth rate per deposite, a bank enticing you with an interest rate of 10% pa compounded semi-annually. What will be equivalent equal annual deposite of that money?(4)[080-R]\n\n6. Distinguish between nominal and effective interest rates. You have just purchased 100 shares of ABC company at Rs. 100 per share, hoping to sell the stock at double the market price. If the stock price is expected to increase by 20% per year. How long do you wait before selling the stock?\n\n7. Compute the equivalent linear growth rupees to make economic equivalence for present deposit of Rs. 38,281.23 against one-year withdrawls at the end of two months each(6 number of linearly increased withdrawals in total) with base amount Rs. 5000 at first (at the end of 2nd months) with 12% interest rate compounding quarterly.(6) [079-R]",
                        contributor: "admin",
                        date: "",
                        approved: true
                    }
                }
            },
            chapter03 : {
                name: "Chapter03",
                questions: {
                    q1: {
                        title: "Basic Methodologies of Engineering Economic Analysis",
                        content: " ",
                        image:"ee/ch-3.1.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                    q2: {
                        title: "",
                        content: " ",
                        image:"ee/ch-3.2.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                    q3: {
                        title: "",
                        content: " ",
                        image:"ee/ch-3.3.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                    q4: {
                        title: "",
                        content: " ",
                        image:"ee/ch-3.4.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                    q5: {
                        title: "",
                        content: " ",
                        image:"ee/ch-3.5.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                    q6: {
                        title: "",
                        content: " ",
                        image:"ee/ch-3.6.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                    q7: {
                        title: "",
                        content: " ",
                        image:"ee/ch-3.7.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                    q8: {
                        title: "",
                        content: " ",
                        image:"ee/ch-3.8.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                    q9: {
                        title: "",
                        content: " ",
                        image:"ee/ch-3.9.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                }
            },
           chapter04 : {
                name: "Chapter04",
                questions: {
                    q1: {
                        title: "Comparative Analysis of Alternatives",
                        content: "",
                        image:"ee/ch-4.1.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                    q2: {
                        title: "",
                        content: "",
                        image:"ee/ch-4.2.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                    q3: {
                        title: "",
                        content: "",
                        image:"ee/ch-4.3.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                    q4: {
                        title: "",
                        content: "",
                        image:"ee/ch-4.4.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                    q5: {
                        title: "",
                        content: "",
                        image:"ee/ch-4.5.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                    q6: {
                        title: "",
                        content: "",
                        image:"ee/ch-4.6.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                    q7: {
                        title: "",
                        content: "",
                        image:"ee/ch-4.7.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                    q8: {
                        title: "",
                        content: "",
                        image:"ee/ch-4.8.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                }
            },
            chapter05: {
                name: "Chapter05",
                questions: {
                    q1: {
                        title: "Replacement Analysis",
                        content: "",
                        image:"ee/ch-5.1.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                     q2: {
                        title: "",
                        content: "",
                        image:"ee/ch-5.2.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                     q3: {
                        title: "",
                        content: "",
                        image:"ee/ch-5.3.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                     q4: {
                        title: "",
                        content: "",
                        image:"ee/ch-5.4.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                     q5: {
                        title: "",
                        content: "",
                        image:"ee/ch-5.5.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                }
            },
            chapter06: {
                name: "Chapter06",
                questions: {
                    q1: {
                        title: "Risk Analysis",
                        content: "",
                        image:"ee/ch-6.1.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                     q2: {
                        title: "",
                        content: "",
                        image:"ee/ch-6.2.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                     q3: {
                        title: "",
                        content: "",
                        image:"ee/ch-6.3.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                     q4: {
                        title: "",
                        content: "",
                        image:"ee/ch-6.4.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                     q5: {
                        title: "Risk Analysis",
                        content: "",
                        image:"ee/ch-6.5.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    }
                }
            },
            chapter07: {
                name: "Chapter07",
                questions: {
                    q1: {
                        title: "Depreciation and Corporate Income Taxes",
                        content: "",
                        image:"ee/ch-7.1.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                     q2: {
                        title: "",
                        content: "",
                        image:"ee/ch-7.2.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                     q3: {
                        title: "",
                        content: "",
                        image:"ee/ch-7.3.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                     q4: {
                        title: "",
                        content: "",
                        image:"ee/ch-7.4.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                     q5: {
                        title: "",
                        content: "",
                        image:"ee/ch-7.5.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    }
                }
            },
            chapter08: {
                name: "Chapter08",
                questions: {
                    q1: {
                        title: "Inflation and Its Impact on Project Cashflows",
                        content: "",
                        image:"ee/ch-8.1.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                     q2: {
                        title: "",
                        content: "",
                        image:"ee/ch-8.2.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                     q3: {
                        title: "",
                        content: "",
                        image:"ee/ch-8.3.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                     q4: {
                        title: "",
                        content: "",
                        image:"ee/ch-8.4.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                     q5: {
                        title: "",
                        content: "",
                        image:"ee/ch-8.5.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                }
            }
        },
        pastPapers: {
            paper1: {
                year: "Upto 2081",
                title: "Engineering eco Past Year Paper",
                filename: "eco3.1bei.pdf"
            }
        }
    },
    DBMS: {
        name: "DBMS",
        contributors: ["admin"],
        chapters: {
            chapter01 : {
                name: "Chapter01",
                questions: {
                    q1: {
                        title: "Introduction",
                        content: "1. Define data and Database Management system. What are the latest trends in Database Management?.(3+2) [081-R]\n\n2. What are an instance and scheme? Explain three schema architecture in DBMS.(2+2) [081-B]\n\n3. Define Database system. Explain the four components of Database System.(1+4)[081-B]\n\n4. Define Database and DBMS. How DBMS is differed from file system? Explain z-tier architecture in DBMS.(1+2+2) [080-R]\n\n5. Define Attributes and explain its type with example. (4) [080-R]\n\n6. Distinguish between logical and physical data independence. Define DDL, DML and DCL with examples.(2+3) [080-B]\n\n7. What are the advantages of Database Management System? List roles and responsibilities of Database Administrator.(3+2) [079-R]",
                        contributor: "admin",
                        date: "",
                        approved: true
                    }
                }
            },
            chapter02: {
                name: "Chapter02",
                questions: {
                    q1: {
                        title: "Data Models",
                        content: "1. Differentiate between degree with the cardinality of a relationship in an ER diagram. Explain briefly about generalization in context to ER diagram with an example.(4) [081-R]\n\n2. A General Hospital consists of a number of specialized wards (such as Radiology,Oncology, etc). Information about ward includes unique name. total numbers of current patients. Each ward hosts a number of patients, who were admitted by a consultant (doctors) employed by the Hospital. On admission, the date and time are kept. The personal details of every patients include name, Medical Recode Number(MRN), set of phone number and one address (city, street, code). A separate register is to be held to store the information of the tests undertaken. Each test has unique episode number, category and the final result of the test. Number of tests may beconducted for each patient. Doctors are specialists in a specific ward and may be leading consultant for a number of patients, Each patient is assigined to one ieading consultant but may be examined  by other doctors, if required. Draw an ER diagram for the above case implementing necessary design constraints.(8) [081-R]\n\n3. Define the following terms briefly: Attribute and its types, entity, participation constraint,weak entity set. Also construct an E-R diagram for a car insurance company whose customers own one or more cars each. Each car has associated with it zero to any number of recorded accidents. Each insuranee policy covers one or more cars, and has one or more premium payments associated with it. Each payment is for a particular period of time, and has an associated due date, and the date when the payment was received.(3+5) [081-B]\n\n4. List the entities, attributes and their relationships and draw an ER diagram for the university database. ' A lecturer, identified by his or her number, name and room number,is responsible for organizing a number of course modules. Each module has a unique code and also a name and each module can involve a number of lectures who deliver part of.it. A module is composed of a series of lectures and because of economic constraints and common sense, sometimes lectures on a given topic can be part of more than one module. A lecture has a time, room and date and is delivered by a lecturer and a lecturer may deliver more than one lecture. Students, identified by number and name, can attend lectures and a student must be registered for a number of modules. We also store the date on which the students first registered for that module. Finally, a lecturer acts as a tutor for a number of students and each student has only one tutor.'(8) [080-R]\n\n5. What is keys and explain different types of keys. 'A football club has a name and a ground and is made up of players. A player can play for only one club and a manager,represented by his name manages a club. A footballer has a registration number, name and age. A club manager also buys players. Each club plays against each other club in the league and matches have a date, venue and score.' Create an ER diagram for above scenario.(2+8) [080-B]\n\n6. Design an E-R diagram for a company, human resource database, 'The company has a set of branch offices. Each branch office has a set of departments. Each department has a set of employees, a set of projects. Each employee has a job history, academic qualification. For each job type, the employee also has a salary history.'(7) [079-R]\n\n7. what is key attribute? List out the types of keys and explain them briefly.(3) [079-R]",
                        contributor: "admin",
                        date: "",
                        approved: true
                    }
                }
            },
            chapter03: {
                name: "Chapter03",
                questions: {
                    q1: {
                        title: "Relational Languages and Relational Model",
                        content: "1. Consider the following relational schema\n Employee(empid,ename, address, title, headid)\n Project(pid, pname, budget, location)\nWork{empid, pid, responsibility,duration)\n(i) Write relationai algebra to find the name and salary of employees working in 'kathmandu'.\n(ii) Write the relational algebra to show the employee name along with their head name.(Note: the data in headid is empid of their corresponding head)\niii)Write relationai algebra to display the details of those employee who live in the same location of their project\n (iv)Write relational algebra to dispiay employee's title, name along with their project name, salary if the project duration is more than 5 years. (2*4) [081-R]\n\n2. Consider the following relational schema\n Employee(empid,ename, address, title, headid)\n Project(pid, pname, budget, location)\nWork{empid, pid, responsibility,duration)\n Payments(title, salary)\n(i) Write SQL code to create the above relational schemas\n(ii) write SQL to count the number of project with duration more than 2 years.\n (iii) write SQL query to find the name of engineers working in ICT project and earning more than 20K\n(iv)Write SQL to update the salary of employees by 15% if salary is less than 50 K, by 10% if salary is in between 50 K to 100 K and by 5 % if salary is greater than 100 K (2*4) [081-R]\n\n3. Consider the relational database as follows:\ndepartment (dept_name, building, budget)\nCourse {course_id, title, dept_name, credits)\ninstructor (ID, name, dept_name, salary)\n section (course_id,sec_id,semester,year,building,room_number,time_slot_id)\nteaches(ID,course_id,sec_id,semester,year)\nstudent (ID, name, dept_namne, total_credit)\na) Write an SQL to add a check constraint in semester altribute [winter. fall, spring,summer] of table'section'.\nb) Write an SQL to find the names of all instructors that have a salary value greater than that of each instructor in the Computer department.\nc) Write an SQL to find the list of the entire department relation in descending order of budget. If several departments have same budget, order them in ascending order by department name.\nd) Write an SQL to Delete the records of all instructors with salary below the average at the university.\ne) Write an SQL to update all instructors with salary over 10.00,000 receive a 5 percent raise, whereas all others receive a 10 percent raise.\nf)Write a Relation Algebra expression to find the name of student whose department name and total credit are same as Shyam's department name and total credit.",
                        contributor: "admin",
                        date: "",
                        approved: true
                    }
                }
            },
            chapter04: {
                name: "Chapter04",
                questions: {
                    q1: {
                        title: "Database Constraints and Normalization",
                        content: "1. Define Functional Dependence. Explain types of functional dependency in detail. Let a relation be R (A, B, C, D, E, F) and set of Functional Dependencies (F)= {AB->C,BC->AD,D->EF}. Find the Candidate Keys. (2+4+4) [081-R]\n\n2. What is Decomposition? Briefly explain about 3NF and BCNF with example. Computing a canonical covering of the given FD.R = (A, B,C) and F = { A->BC,B->C,A->B,AB->C }(1+3+4) [081-B]\n\n3. Why normalization is an important in DBMS? Explain anomalies in DBMS with example. In relation R = (A, B, C, D, E). The set of functional dependencies is : (A->BC,CD->E,B->D,E->A) decomposed it into R1 = (A,B,C), R2=(A,D,E). Show that this decomposition is a lossless-join decomposition.(1+3+4)[080-R]\n\n4.  Define integrity constraints and domain constraints.(4) [080-B]\n\n5. What is normalization? Explain the role of function dependency in normalization of data.(2+2) [080-B]\n\n6. what is Normalization? why is it important? How can you convert a Unnormalized table  to Third Normal Form? Expiain with example.(1+2+5)[079-R]",
                        contributor: "admin",
                        date: "",
                        approved: true
                    }
                }
            },
            chapter05: {
                name: "Chapter05",
                questions: {
                    q1: {
                        title: "Query Processing and Optimization",
                        content: "1. Explain about the steps.involved in query processing with necessary diagram. Briefly explain about the pipelining approaches used for evaluation of query.(4+4) [081-R]\n\n2. Briefly outline the Query Processing and optimization.(3) [081-B]\n\n3. Explain basic steps of query processing.(2)\n\n4. Define query processing with necessary figure. Explain the differences between cost-based and heuristics based methods of query optimization.(3+5) [080-B]\n\n5. Explain the steps of query processing with examples. Compare cost based evaluation and heuristic optimization method.(4+4) [079-R]",
                        contributor: "admin",
                        date: "",
                        approved: true
                    }
                }
            },
            chapter06 : {
                name: "Chapter06",
                questions: {
                    q1: {
                        title: "File Structure and Hashing ",
                        content: "1. What do you mean by RAID? Explain different levels of RAID. What do you mean by hashing? Explain how hashing helps to organize the file with an example.(8) [081-R]\n\n2. What is secondary index? Explain with example. Explain about dynamic hashing techniques in details.(2+6) [081-B]\n\n3. What is the role of index in DBMS? Explain primary index and secondary index with example. What are the characteristics of B+ tree?(1+4+3) [080-R]\n\n4. What is the difference between ordered indices and hash indices in a database? What is the advantages of using sparse index?(4) [080-B]\n\n5. What do you mean by RAID? Explain the types of RAID and mention how to select an appropriate level of RAID.(4) [080-B]\n\n6. What is record organization? Explain the way of file organization. Compare secondary index and multilevel indexing techniques.(2+2+4) [079-R]",
                        contributor: "admin",
                        date: "",
                        approved: true
                    }
                }
            },
            chapter07: {
                name: "Chapter07",
                questions: {
                    q1: {
                        title: "Transactions processing and Concurrency Control",
                        content: "1. Define transaction and explain its ACID properties. Define schedule and give proper examples. What is a serializable scheclule?(1+3+2+2) [079-R]\n\n2. Database-system implementers have paid much more attention to the ACID properties than have file-system implementers. Why might this be the cases?(4) [080-B]\n\n3. Briefly explain two phase locking protocol with an example.(4) [080-B]\n\n4. Explain about the state diagram of transaction. How do test Conflict Serializability of a Schedule S, explain in details with example.(3+5)\n\n5. Check whether the given schedule S is conflict serializable or not. If yes, then determine all the possible serialized schedules.(2+6) [081-B]\n\n6. Explain ACID properties in database transaction with an example. Explain how wait-die scheme and wound-wait scheme helps to prevent deadlock.(8) [081-R]",
                        contributor: "admin",
                        date: "",
                        approved: true
                    }
                }
            },
            chapter08 : {
                name: "Chapter08",
                questions: {
                    q1: {
                        title: "Crash Recovery",
                        content: "1. Define a log based recovery method. Explain the conditions of using redo and undo operations during recovery process.(2+5) [081-R]\n\n2. Explain about Checkpoints with example. Explain about immediate-database modification techniques with example.(3+5) [081-B]\n\n3. What are the different types of failure in DBMS? Explain shadow page recovery technique with example.(3+5) [080-B]\n\n4. Explain the purpose of the checkpoint mechanism. How often should checkpoints be performed?(4) [080-B]\n\n5. What is deferred-database modification technique in context to log based recovery approach? Explain.(4)[080-B]\n\n6. Define checkpointing with example. How REDO and UNDO operations performed in log based recovery mechanism?(3+5) [079-B]",
                        contributor: "admin",
                        date: "",
                        approved: true
                    }
                }
            },
            chapter09: {
                name: "Chapter09",
                questions: {
                    q1: {
                        title: "Advanced database Concepts",
                        content: "1. Write short notes on:\na) Distributed Database System\nb)Data warehouse\n\n2. What is spatial data? How do you store spatial data in a database? What are differences between object oriented and relational database management system?(1+2+3) [081-B]\n\n3. Explain Distributed Database System with its type. What are different data fragmentation techniques?(4+2) [080-R]\n\n4. Differentiate between data warehousing and data mining with an example. What are the types of data fragmentation in distributed databases? Write any four advantages of distributed database.(3+3+3) [080-B]\n\n5. Write Short notes on:\na) Advantages of object oriented database model\nb) Parallel database architecture\nc) Data warehousing",
                        contributor: "admin",
                        date: "",
                        approved: true
                    }
                }
            }
        },
        pastPapers: {
            paper1: {
                year: "Upto 2081",
                title: "DBMS Past Year Paper",
                filename: "dbms3.1bei.pdf"
            }
        }
    },
    OS: {
        name: "OS",
        contributors: ["admin"],
        chapters: {
            chapter01: {
                name: "Chapter01",
                questions: {
                    q1: {
                        title: "Introduction",
                        content: "1. How does operating system provide a beautiful interface to user? Why Exo-Kernel doesn't require Re-mapping of resources? Is layered structure better than monolithic structure? Explain.(3+3+3) [081-R]\n\n2. Why operating system evolve over long periods of time? Justify how OS act as resource manager.(1+3). Explain fork() and spawn() system call in the OS. [1+3+3]\n\n3. What is an Operating system? Explainthe statement 'operating system acts as a Broker between hardware and application program'[080-R]\n\n4. Explain OS as an Extended Machine. Differentiate between Monolithic Kernel and Micro-Kernel. Explain OS as a virtual Machine.(4) [080-B]\n\n5. Why is the process table needed in a timesharing system? Is it also needed in personal computer systems running UNIX or Windows with a single user? Distinguish between Shell and Kernel.(6+4) [079-R]",
                        contributor: "admin",
                        date: "",
                        approved: true
                    }
                }
            },
             chapter02: {
                name: "Chapter02",
                questions: {
                    q1: {
                        title: "Process Management",
                        content: "",
                        image:"os/ch-2.1.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                     q2: {
                        title: "",
                        content: "",
                        image:"os/ch-2.2.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                     q3: {
                        title: "",
                        content: "",
                        image:"os/ch-2.3.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                     q4: {
                        title: "",
                        content: "",
                        image:"os/ch-2.4.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                     q5: {
                        title: "",
                        content: "",
                        image:"os/ch-2.5.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    }
                }
            },
             chapter03: {
                name: "Chapter03",
                questions: {
                    q1: {
                        title: "Process Communication and Synchronization",
                        content: "1. Explain about Lock variable for achieving Mutual Exclusion. Explain the types of semaphore along with the major operations of semaphore with a simple Pseudocode.(2+5) [081-R]\n\n2. How semaphore is used in process synchronization? Explain how semaphore is best solution for producer consumer problem with pseudo-code of both producer and consumer process.(1+7) [081-B]\n\n3. What is the need process synchronization? How can the semaphore solve the reader-writer problem? Explain with respective pseudo-code of both reader and writer process.(2+6) [080-R]\n\n4. Why process need to be synchronized? Explain Peterson's Solution in mutual exclusion.(2+3)\n\n5. What is Semaphore? How can Producer Consumer problem be solved using Semaphore? Explain.(1+4)\n\n6. Define race condition. What are the requirements of mutual exclusion? How can you achieve mutual exclusion using Peterson's Solution? Explain with pseudo code.(2+2+6) [079-R]",
                        contributor: "admin",
                        date: "",
                        approved: true
                    }
                }
            },
             chapter04: {
                name: "Chapter04",
                questions: {
                    q1: {
                        title: "Memory Management",
                        content: "1. Explain how a logical address is mapped to a physical address in paging. How is virtual memory management done?(4+2)\n\n2. How many pages fault for the following given reference string for four-page frames 0,9,0,1,8,1,8,7,8,7,1,2,8,2,7,8,2,2,8,3.\n a)LRU\n b)FIFO\n c)Optimal Page\n\n3. Explain first fit, Next fit memory allocation algorithm with an example.(5) [081-B]\n\n4. what are the differences between fixed partitioning and variable partitioning system of memory for multiprogramming? Given reference to the following pages by a program:0,9,0,1,8,1,8,7,8,7,1,2,8,2,7,8,2,3,8,3\nHow many page faults will occur if the program has 4 frames for Optimal page Replacement Algorithm?(3+5) [081-B]\n\n5. Explain Best fit and Worst fit memory allocation algorithm with an example.(5) [080-R]\n\n6. What is Belady's in FIFO? Consider the following page reference strings;2,3,4,2,1,3,5,4,3,1,5,3,4,5,0,1,4,2.Find how, many page fault occur according to OPTIMAL,LRU (least recently used) and LFU (least frequently used) page replacement algorithm assuming 3 page frames.(1+7) [080-R]\n\n7. Why process need to be synchronized? Explain Peterson's Solution in mutual exclusion. Why multilevel paging is required?(2+3+2) [080-B]\n\n8. Consider the following page reference string: 5,0,2,1,0,3,0,2,4,3,0,3,2,1,3,0,1,5\n Calculate page hit percentage. How many page faults would occur for the FIFO,Optimal,LFU and LRU replacement algorithms having four frames? Remember all frames are initially empty, so your first unique page will cost one fault each.(8) [080-B]\n\n9. Consider a swapping system in which memory consists of the following hole sizes in memory order: 10 MB, 4 MB, 20 MB, 18 MB, 7 MB, 9 MB, 12 MB and 15 MB.Which hole is taken for successive segment requests of\n i) 12MB\n ii) 10MB\n iii) 9MB \n for first fit? Now repeat the question for best fit and worse fit.(6) [079-R]",
                        contributor: "admin",
                        date: "",
                        approved: true
                    }
                }
            },
             chapter05: {
                name: "Chapter05",
                questions: {
                    q1: {
                        title: "File System",
                        content: "1. Explain I-node approach of files implementation with its advantages and disadvantages.(5) [081-R]\n\n2. What is file attribute? List the file system performance indicator. Explain the file allocation methods with its advantages and disadvantages.(1+2+5)[081-B]\n\n3. What is directory organization in files? Explain its types.(8) [080-R]\n\n4. What are the different methods for allocating disk space for file? Explain free space management techniques.(3+7) [080-B]\n\n5. Explain various ways of implementing file system. How do you measure the file system performance and how it can be improved?(6+4) [079-R]",
                        contributor: "admin",
                        date: "",
                        approved: true
                    }
                }
            },
             chapter06: {
                name: "Chapter06",
                questions: {
                    q1: {
                        title: "I/O Management and Disk Scheduling",
                        content: "",
                        image:"os/ch-6.1.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                     q2: {
                        title: "",
                        content: "",
                        image:"os/ch-6.2.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                     q3: {
                        title: "",
                        content: "",
                        image:"os/ch-6.3.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                     q4: {
                        title: "",
                        content: "",
                        image:"os/ch-6.4.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                     q5: {
                        title: "",
                        content: "",
                        image:"os/ch-6.5.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                }
            },
             chapter07: {
                name: "Chapter07",
                questions: {
                    q1: {
                        title: "Deadlock",
                        content: "",
                        image:"os/ch-7.1.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                    q2: {
                        title: "",
                        content: "",
                        image:"os/ch-7.2.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                    q3: {
                        title: "",
                        content: "",
                        image:"os/ch-7.3.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                    q4: {
                        title: "",
                        content: "",
                        image:"os/ch-7.4.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                    q5: {
                        title: "",
                        content: "",
                        image:"os/ch-7.5.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                }
            },
             chapter08: {
                name: "Chapter08",
                questions: {
                    q1: {
                        title: "Security",
                        content: "",
                        image:"os/ch-8.1.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                     q2: {
                        title: "",
                        content: "",
                        image:"os/ch-8.2.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                     q3: {
                        title: "",
                        content: "",
                        image:"os/ch-8.3.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                     q4: {
                        title: "",
                        content: "",
                        image:"os/ch-8.4.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    }
                }
            },
             chapter09: {
                name: "Chapter09",
                questions: {
                    q1: {
                        title: "System Administration",
                        content: "",
                        image:"os/ch-9.1.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                     q2: {
                        title: "",
                        content: "",
                        image:"os/ch-9.2.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                     q3: {
                        title: "",
                        content: "",
                        image:"os/ch-9.3.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                     q4: {
                        title: "",
                        content: "",
                        image:"os/ch-9.4.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    }
                }
            }


        },
        pastPapers: {
            paper1: {
                year: "Upto 2081",
                title: "Operating system Past Year Paper",
                filename: "OS3.1bei.pdf"
            }
        }
    },
    FD: {
        name: "FD",
        contributors: ["admin"],
        chapters: {
            chapter01: {
                name: "Chapter01",
                questions: {
                    q1: {
                        title: "Introduction",
                        content: "1. What is Filter? Explain the significance of normaiization and denormalization during filter design. Derive the erpression to calcuiate the new values of element that will change the operating frequency of a low pass filter from ω(old) to ω(new).(1+2+4) [081-R]\n\n2. What are the characteristics of ideal filter? What !s the importance of scaling in filter design? Derive the necessary expressions to determine the new values of circuit elements in the case of magnitude and frequency scaling?.(7) [081-B]\n\n3. What is the importance of normalization and denormalization in filter design? Derive element scaling equation.(2+5) [080-R]\n\n4. what is the significance of normalization and denormalization in filter design? Derive elements scaling equations.(2+5) [080-B]\n\n5. What are the significance of normalization and denormalization in filter design? Derive equation to calculate the new values of resistors, inductors and capacitors that will change the half-power frequency of a low pass filter from  ω(0)rad/s to ω(n) rad/s.(3+4) [079-R]",
                        contributor: "admin",
                        date: "",
                        approved: true
                    }
                }
            },
            chapter02: {
                name: "Chapter02",
                questions: {
                    q1: {
                        title: "Approximations Method",
                        content: "1. What are the characteristics of inverse Chebyshev response? Derive the expression to calculate the order of inverse Chebyshev low pass filter. Calculate inverse Chebyshev poles and zeros for given specifications: 	α(min)= 18dB, 	α(max)= 0.25dB, ω(s)= 1400 rad/sec and 	ω(p)= 1000 rad/sec.(2+3+5) [081-R]\n\n2. Determine the Butterworth low pass characteristics with the minimum n such that following specifications are satisfied: 	α(p)=1dB, 	α(s)= 25dB, 		ω(s)/	ω(p)= 1.5. (3) [081-R]\n\n3.What is approximation in filter design? Derive an expression to calculate the order of Inverse Chebyshev low pass filter. Use this formula to estimate the order of Chebyshev low pass filter with the following specifications:\n	ω(p)= 100 Krad/sec, 	ω(s)=140 Krad/sec\n	α(max)= 0.25dB, 	α(min)= 18dB. (1+5+3) [081-B]\n\n4.  What is constant delay filter? Find the transfer function of 3rd order constant delay filter.(5) [081-B]\n\n5. Derive the relation to calculate the order n of a Butterworth approximation. Use the formula to calculate the order of Butterworth having following specification 	α(p)=0.5dB, 	α(s)= 20dB, 	ω(p)= 1000rad/s, 	ω(s)= 2000rad/s. Determine transfer function and show pole locations.(4+3+3) [080-R]\n\n6. What is the importance of all pass filter in filter design? Find the transfer function of 3rd order Bessel Thomson low pass filter.(1+4)[080-R]\n\n7. What are the characteristics of chebyshev magnitude response? Derive an expression to calculate the order(n) of chebyshev filter for given lowpass specifications. Determine the minimum order n of Chebyshev filter for following specifications. 	α(p)= 1dB, 	α(s)= 25dB and 	ω(s)/ω(p)= 1.5.(3+4+3) [080-B]\n\n8. What is constant delay filter? What is its significance? Derive a transfer function of a second order constant delay filter.(1+1+3) [080-B]",
                        contributor: "admin",
                        date: "",
                        approved: true
                    }
                }
            },
            chapter03: {
                name: "Chapter03",
                questions: {
                    q1: {
                        title: "Frequency Transformations",
                        content: "1. Design a Band pass filter having center frequency at 1500 rad/sec and bandwidth 300 rad/sec from a 4th order Butterworth low pass resistively terminated lossless filter.(Refer Table).(4) [081-R]",
                        image:"fd/081-R.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                     q2: {
                        title: "",
                        content: "2. Describe the frequency transfomation from low pass filter to band pass filter with a suitable example.(5) [081-B]\n\n3.  What are the applications of frequency transmission in filter design? How can you obtain a high pass filter from given low pass filter? Explain with a suitable example.(1+4) [080-B]",
                        image:"",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                    q3: {
                        title: "",
                        content: "4. How frequency transformation reduces the design steps required to design a filter? Design a band stop filter having center frequency 2000 rad/s and bandwidth 400 rad/s from a 3rd order Butterworth low pass filter. (Refer Table)(1+4) [080-R] ",
                        image:"fd/080-R.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },

                }
            },
            chapter04: {
                name: "Chapter04",
                questions: {
                    q1: {
                        title: "Properties and synthesis of passive networks",
                        content: "",
                        image:"fd/ques1.jpg",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                     q3: {
                        title: "",
                        content: "",
                        image:"fd/ques2.jpg",
                        contributor: "admin",
                        date: "",
                        approved: true
                    }, 
                     q2: {
                        title: "",
                        content: "3. What do you mean by 2-port network? Explain the series connection of two port networks with figure and derivations.(1+4) [081-R]\n\n4. Define zeros of transmission. How can zeros of transmission be realized in the circuits? Explain with suitable diagrams.(5) [081-B]\n\n5. 6. Define zeros of transmission in two port network. What is zero shifting by partial removal of pole? Explain with suitable example.(1+3) [080-R]\n\n6. What is zero shifting by partial removal of a pole? Explain with suitable example.(5) [080-B]",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                   
                }
            },
            chapter05: {
                name: "Chapter05",
                questions: {
                    q1: {
                        title: "Design of Resistively-Terminated Lossless Filter",
                        content: "1. Realize the third order Butterworth high pass filter using transfer function of LPF as T(S)= 1/(S+1)(S²+S+1) in the form of doubly terminated LC ladder with R1 = R2 = 1Ω.(5) [081-R]\n\n2. Describe the significance of reflection coefficient. Derive the 3rd order Butterworth low pass filter resistively-terminated lossless network with unequal termination of R1 = 1Ω and R2 = 4Ω.(2+5) [080-R]\n\n3. What is transmission coefficient? What information do we get from it? Derive the   expression for reflection coefficient for a resistively terminated LC ladder network.(2+5) [080-B]",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                    q2: {
                        title: "",
                        content: "4. What information do you get when the value of reflection coefficient is zero? Design a third order Butterworth low pass filter using Resistively terminated lossless ladder with equal termination of 1 Ω.(Refer Table). (1+6) [081-B] ",
                        image:"fd/081-B.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                    q3: {
                        title: "",
                        content: "5. Define reflection coefficient. Realize the third order Butterworth low pass filter using resistively terminated lossless ladder with R1 = 1Ω and R2 = 4Ω. [Refer Table 2].[079-R]",
                        image:"fd/079-R.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    }
                }
            },
            chapter06: {
                name: "Chapter06",
                questions: {
                    q1: {
                        title: "Active Filters",
                        content: "1. Realize a system using non-inverting op-amp configuration with zero at -5 and pole at -3 and having high frequency gain of 2.(5) [081-R]\n\n2. Design the circuit diagram of Sallen and Key LP biquad and derive its transfer function. Design a MFB LP biquad for the transfer function as T(s) = 5/(s² + 1.2s + 1).(5+4) [081-R]\n\n3. Design circuit of the transfer function T(s) = (s+8)/(s+2) using non inverting op-amp configuration.(4) [081-B]\n\n4. Derive the transfer function of low pass sallen-key biquad filter (Refer Table 1) The half power frequency should be l0 KHz. Make the largest capacitance 0.01µF and overall gain be 1.(4+4) [081-B]\n\n5. Differentiate active and passive filter. Realize the following transfer function using non-inverting op-amp configuration.\n T(s)=4(s+2)/(s+1). (2+3) [080-R]\n\n6. Draw the circuit diagram of Tow-Thomas Biquad circuit and derive its transfer function.Design a low pass filter using Tow Thomas Biquad circuit with poles at -450 ± j893.03 and dc gain of 1.5. The final circuit should contain practically realizable values.(8) [080-R]\n\n7. Design a second order low pass filter with poles at -10000 ± j 17320.51 and Dc Gain of 2.5 using a Tow Thomas Biquad Circuit. Your finsl circuit should have capacitor of value 0.001µF.(6) [080-B]\n\n8. How is the excess gain compensated in Sallen-key circuit? Explain with necessary derivations and diagrams.(5) [080-B]",
                        contributor: "admin",
                        date: "",
                        approved: true
                    }
                }
            },
            chapter07: {
                name: "Chapter07",
                questions: {
                    q1: {
                        title: "Sensitivity",
                        content: "1. What is sensitivity analysis in filter design? perform the sensitivity analysis of quality factor (Q) in Tow Thomas low pass biquad.(1+5) [081-R]\n\n2. Explain the importance of sensitivity analysis in the design of filter and perform the sensitivity analysis of ω(0) of lowpass sallen-Key biquad.(7) [081-B]\n\n3. What information do you get when the sensitivity of y with respect to x is 0.1? Perform sensitivity analysis for center frequency ω(0) of Tow Thomas low pass filter with respect to all the resistors and capacitors present in the circuit.(1+3) [080-R]\n\n4. What is the importance of sensitivity analysis in filter design? perform the sensitivity analysis of Wo of sallen-key lowpass biquad filter.(2+4) [080-B]",
                        contributor: "admin",
                        date: "",
                        approved: true
                    }
                }
            },
            chapter08: {
                name: "Chapter08",
                questions: {
                    q1: {
                        title: "Design of High Order Active Filters",
                        content: "1. What is GIC? How can it be used to avoid shunt inductors in LC ladder circuit?(5) [081-R]\n\n2. Design the 4th order Butterworth LPF in doubly-terminated network using Leapfrog simulation. The necessary information is listed in the given table below:\n|Order(n)=4 and LPF | R(1)=1 | L(1)=0.7654 | C(2)=1.848 | L(3)=1.848 | C(4)=0.7654 | R(2)=1 |.(081-B)",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                    q2: {
                        title: "",
                        content: "what is Bruton Transformation? Design the 4th order Butterworth low pass filter with half power frequency 2,000 rad/sec and practically realizable elements using FDNR.(Refer Table)(2+4) [081-R] ",
                        image:"fd/081-R.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                     q3: {
                        title: "",
                        content: "What is FDNR? How can you use FDNR to avoid the inductor in filter design? Explain.Design third order Butterworth low pass filter having half power frequency 4000 rad/susing FDNR. (Refer Table).(4+6) [080-R] ",
                        image:"fd/080-R.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                     q4: {
                        title: "",
                        content: " What is Bruton transformation? Design the 4th order Butterworth low pass filter with half power frequency 20,000 rad/s and practically realizable elements using FDNR.[Refer Table 2].(3+5)[2079-R]",
                        image:"fd/079-R.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    }
                }
            },
            chapter09: {
                name: "Chapter09",
                questions: {
                    q1: {
                        title: "Switched-Capacitor Filters",
                        content: "",
                        image: "fd/ch-9a.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                    q2: {
                        title: "",
                        content: "",
                        image: "fd/ch-9b.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                    q3: {
                        title: "",
                        content: "",
                        image: "fd/ch-9c.png",
                        contributor: "admin",
                        date: "",
                        approved: true
                    },
                    q4: {
                        title: "",
                        content: "4. 12. Why resistors are replaced by switched capacitors in IC technology? How- summer,inverting integrator and non-inverting integrator can be realized using switched capacitor?Explain with necessary diagrams and expressions.(2+4)\n\n5. Why do we need switched capacitor to simulate resister in MOS technology? How can you simulate a resister using switched capacitor? Explain with necessary derivations.(2+4)",
                        image: "",
                        contributor: "admin",
                        date: "",
                        approved: true
                    }
                }
            }
        },
        pastPapers: {
            paper1: {
                year: "Upto 2081",
                title: "Filter Design Past Year Paper",
                filename: "filter3.1bei.pdf"
            }
        }
    },
    CN: {
        name: "CN",
        contributors: ["admin"],
        chapters: {
            chapter01: {
                name: "Chapter01",
                questions: {
                    q1: {
                        title: "Introduction to Computer Network",
                        content: "1. Discuss Client-Server model and Peer-to-Peer model. Compare TCP/Ip model with OSI reference model.(4+4) [2081-BB]\n\n2. Why do you need layering? How does F2F works? Explain.(2+6) [2080-BR]\n\n3. What is data encapsulation? Explain OSI reference model with suitable diagram.(2+6) [2080-BB]\n\n4. Why layering is important? Explain Open System interconnection (OSI model and compare OSI with TCP/IP reference model.(2+6) [2079-BR] ",
                        contributor: "admin",
                        date: "",
                        approved: true
                    }
                }
            },
            chapter02: {
                name: "Chapter02",
                questions: {
                    q1: {
                        title: "Physical Layer",
                        content: "1. What are the factors to be considered while selecting transmission media? Explain optical fiber cable in detail with its advantages and disadvantages.(2+6) [2081-BB]\n\n2. Discuss briefly Delay, Bandwidth and MAC address. Discuss how data or packets goes through switch to switch in Frame Relay Virtual-circuit network.(3+5)\n\n3. Define Throughput and Delay. Compare different types of guided transmission media with appropriate figures.(2+6)\n\n4. What are the factors to be considered whiie selecting media? Differentiate between datagram switching and virtual circuit switching approach.(2+6) [2079-BR]",
                        contributor: "admin",
                        date: "",
                        approved: true
                    }
                }
            },
            chapter03: {
                name: "Chapter03",
                questions: {
                    q1: {
                        title: "Data Link Layer",
                        content: "1. Compare Flag byte with byte stuffing and bit stuffing in Framing. Detect the error(if any) using CRC, if received frame is 0101101101 and generator polynomial is 1001.(2+6) [2081-BB]\n\n2. What are the services provided by data link layer? How CRC can be used to detect error?Explain with an example.(2+6) [2080-BR]\n\n3. Explain Selective repeat and Go back N ARQ with example. A bit string 011011101111 1111011111110 needs to be transmitted with flag 7E at the data link layer. What is the string actually transmitted after bit stuffing?.(6+2) [2080-Ba.B]\n\n4. What are the services provided by data link layer? How does CSMA/CA protocol work to avoid the collision during hidden station problem? Explain with diagram",
                        contributor: "admin",
                        date: "",
                        approved: true
                    }
                }
            },
            chapter04: {
                name: "Chapter04",
                questions: {
                    q1: {
                        title: "Network Layer",
                        content: "1. What are the criteria for good routing? Explain the general operation of RIP with timers.(2+6) [2081-Ba.B]\n\n2. What is the Network address and broadcast address in IPv4 addressing? How do you assign the sub-net IP address to three LANs each 12,5 and 29 computers respectively?(Assume 202.35.91.32/25).(2+6) [2081-Ba.B]\n\n3. Explain the Flooding algorithm with ways to minimize the duplication of packets. Write down steps for Link State Routing Protocol.(4+4) [2080-BR]\n\n4. What is private IP address? Company Allegro hired an IT expert. The expert was given task to perform logical design of the company with an IP block of 206.100.100.0/24. The company had 40,20,8,100 and 5 employees in its sales, admin, finance, support and HR departments res pectively. Show how he was able to perform subnetting with minimum IPwastage.(2+6) [2080-BR]\n\n5. Why are different inter-AS and intra-AS protocols used in the internet? Compare and contrast link state and distance vector routing algorithms.(2+6) [2080-Ba.B]\n\n6.Design a network for a company having 5 departrnents with 60,42,30,10 and 12 hosts,Specify the network address, valid host range, broadcast address and subnet mask for each department from the given address 202.17.11.0/24.\n\n7. Suppose an ISP has 200,250,500 and 100 customer in the four different place say, A, B, C and D and need four point-to-point links. Provided an IP 10.0.48.0/21, you are required to perform subnetting with minimum waste of IP. Find out the subnet masks, network address, broadcast address, usable IP range and unusable IP range for each location.(10) [2079-BR]\n\n8. Define unicast and multicast routing. Compare distance vector and link state routing protocols with examples.(2+6) [2079-BR]",
                        contributor: "admin",
                        date: "",
                        approved: true
                    }
                }
            },
            chapter05: {
                name: "Chapter05",
                questions: {
                    q1: {
                        title: "Transport Layer",
                        content: "1. Why do we need a transport layer? Draw the segment of UDP. compare TCP with UDP.(2+2+4) [2081-BB]\n\n2. Discuss how multiplexing and de-multiplexing is achieved in Transport layer with examples. How is token bucket algorithm better than Leaky bucket in context with packet loss? Explain.(4+4) [2080-BB]\n\n3. What are the differences between TCP and UDP? How do you implement packet congestion Control for better QOS?(4+4) [2080-BB]\n\n4. What is significance of port address? Discuss about different classes of port addresses defined by IANA. How can traffic congestion controlled by token Bucket method?(1+3+4) [2079-BR]",
                        contributor: "admin",
                        date: "",
                        approved: true
                    }
                }
            },
            chapter06: {
                name: "Chapter06",
                questions: {
                    q1: {
                        title: "Application Layer",
                        content: "1. Draw the architecture of Email Agent. Why is DNS distributive in nature? Explain iterative query vs recursive query of DNS with examples and diagrams.(2+6) [2081-BB]\n\n2. Why is HTTPS not used for all web traific? How FTP works? Explain.(2+6) [2080-BR]\n\n3. What is port address and socket address? Explain working principle of E-mail system with a proper diagram.(2+6) [2080-BB]\n\n4. What is DNS? Explain the working principle of DNS with a proper diagram. Compare IMAP and POP3 protocols.(1+4+3)[2079-BR]",
                        contributor: "admin",
                        date: "",
                        approved: true
                    }
                }
            },
            chapter07: {
                name: "Chapter07",
                questions: {
                    q1: {
                        title: "Introduction to IPV6",
                        content: "1. Discuss any-cast and multi cat address in IPv6 with use cacses. If there are IPv4 networks in between two IPv6 endpoints, what type of transition strategies will you suggest? Explain with examples and diagrams.(2+6) [2081-BB]\n\n2. How extension header is used in IPv6 ? Explain dual stack transition mechanism fiom IPv4 to IPV6.(3+5) [2080-BR]\n\n3. What are the features of IPv6 header. Explain the strategies used for transition from IPv4 to IPv6.(3+5) [2080-BB]\n\n4. What are the factors that lead to the deployment of IPv6? Explain briefly about the process involved in transition of IPv4 to IPv6.(2+6) [2079-BR]",
                        contributor: "admin",
                        date: "",
                        approved: true
                    }
                }
            },
            chapter08: {
                name: "Chapter08",
                questions: {
                    q1: {
                        title: "Network Security",
                        content: "1. What is IPSEC? Encrypt the plain text Machine using RSA algorithm.(2+6) [2081-BB]\n\n2. Write short notes on(Any Two)\na) HTTP methods\nb) VPN\nc) IDS\n d) Token bucket Algorithm.(2*4) [same year]\n\n3. Draw the block diagram of DES algorithm. Explain RSA with examples.(3+5) [2080-BR]\n\n4. Write short notes on(Any Two)\na) Deffie Hellman Algo\nb) PGP\nc) ATM\n d) 802.3 CSMA.(2*4) [same year]\n\n5. When can you say your network is compromised? And, how is it caused? How can you make your network secure using public key cryptography?(2+2+4) [2080-BB]\n\n6. Write short notes on(Any Two)\na) X25 Network\nb) DHCP\nc) ALOHA.(2*3)[same year]\n\n7. What are the properties of secure communication? Encrypt and decrypt the message BEIE using RSA algorithm.(2+6) [2079-BR]\n\n8. Write short notes on(Any Two)\na) Go back N ARQ \nb) Virtual circuit switching\nc) CRC.(2*3)[same year]",
                        contributor: "admin",
                        date: "",
                        approved: true
                    }
                }
            }
        },
        pastPapers: {
            paper1: {
                year: "Upto 2081",
                title: "Computer Network Past Year Paper",
                filename: "cn3.1bei.pdf"
            }
        }
    }
};
