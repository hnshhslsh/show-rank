//Ranking data form https://ying-zhang.github.io/misc/2017/ccf-all-in-one/


const rawRankingString = 
"A	AAAI	AAAI Conference on Artificial Intelligence\n" + 
"A	CVPR	IEEE Conference on Computer Vision and Pattern Recognition\n" + 
"A	ICCV	International Conference on Computer  Vision\n" + 
"A	ICML	International Conference on Machine  Learning\n" + 
"A	IJCAI	International Joint Conference on  Artificial Intelligence\n" + 
"A	NIPS	Annual Conference on Neural Information Processing Systems\n" + 
"A	ACL	Annual Meeting of the Association for  Computational Linguistics\n" + 
"B	COLT	Annual Conference on Computational Learning Theory\n" + 
"B	EMNLP	Conference on Empirical Methods in  Natural Language Processing\n" + 
"B	ECAI	European Conference on Artificial Intelligence\n" + 
"B	ECCV	European Conference on Computer Vision\n" + 
"B	ICRA	IEEE International Conference on  Robotics and Automation\n" + 
"B	ICAPS	International Conference on Automated  Planning and Scheduling\n" + 
"B	ICCBR	International Conference on  Case-Based Reasoning\n" + 
"B	COLING	International Conference on Computational Linguistics\n" + 
"B	KR	International Conference on Principles of Knowledge Representation and Reasoning\n" + 
"B	UAI	International Conference on Uncertaintyin Artificial Intelligence\n" + 
"B	AAMAS	International Joint Conference on Autonomous Agents and Multi-agent Systems\n" + 
"B	PPSN	Parallel Problem Solving from Nature\n" + 
"C	ACCV	Asian Conference on Computer Vision\n" + 
"C	CoNLL	Conference on Natural Language Learning\n" + 
"C	GECCO	Genetic and Evolutionary Computation Conference\n" + 
"C	ICTAI	IEEE International Conference on Tools with Artificial Intelligence\n" + 
"C	ALT	International Conference on  Algorithmic Learning Theory\n" + 
"C	ICANN	International Conference on Artificial  Neural Networks\n" + 
"C	FGR	International Conference on Automatic  Face and Gesture Recognition\n" + 
"C	ICDAR	International Conference on Document Analysis and Recognition\n" + 
"C	ILP	International Conference on Inductive  Logic Programming\n" + 
"C	KSEM	International conference on Knowledge Science, Engineering and Management\n" + 
"C	ICONIP	International Conference on  Neural Information Processing\n" + 
"C	ICPR	International Conference on Pattern Recognition\n" + 
"C	ICB	International Joint Conference  on Biometrics\n" + 
"C	IJCNN	International Joint Conference on Neural Networks\n" + 
"C	PRICAI	Pacific Rim International Conference on Artificial Intelligence\n" + 
"C	NAACL	The Annual Conference of the North  American Chapter of the Association for Computational Linguistics\n" + 
"C	BMVC	British Machine Vision Conference\n" + 
"C	IROS	IEEE\SJ International Conference on Intelligent Robots and Systems\n" + 
"C	AISTATS	Artificial Intelligence and Statistics\n" + 
"C	ACML	Asian Conference on Machine Learning\n" + 
"A	AI	Artificial Intelligence\n" + 
"A	TPAMI	IEEE Trans on Pattern Analysis and Machine Intelligence\n" + 
"A	IJCV	International Journal of Computer Vision\n" + 
"A	JMLR	Journal of Machine Learning Research\n" + 
"B	TAP	ACM Transactions on Applied Perception\n" + 
"B	TSLP	ACM Transactions on Speech and Language Processing\n" + 
"B		Computational Linguistics\n" + 
"B	CVIU	Computer Vision and Image Understanding\n" + 
"B	DKE	Data and Knowledge Engineering\n" + 
"B		Evolutionary Computation\n" + 
"B	TAC	IEEE Transactions on Affective Computing\n" + 
"B	TASLP	IEEE Transactions on Audio, Speech, and Language Processing\n" + 
"B		IEEE Transactions on Cybernetics\n" + 
"B	TEC	IEEE Transactions on Evolutionary Computation\n" + 
"B	TFS	IEEE Transactions on Fuzzy Systems\n" + 
"B	TNNLS	IEEE Transactions on Neural Networks and learning systems\n" + 
"B	IJAR	International Journal of Approximate Reasoning\n" + 
"B	JAIR	Journal of AI Research\n" + 
"B		Journal of Automated Reasoning\n" + 
"B	JSLHR	Journal of Speech, Language, and Hearing Research\n" + 
"B		Machine Learning\n" + 
"B		Neural Computation\n" + 
"B		Neural Networks\n" + 
"B		Pattern Recognition\n" + 
"B	AAMAS	Autonomous Agents and Multi-Agent Systems\n" + 
"C	TALIP	ACM Transactions on Asian Language Information Processing\n" + 
"C		Applied Intelligence\n" + 
"C	AIM	Artificial Intelligence in Medicine\n" + 
"C		Artificial Life\n" + 
"C		Computational Intelligence\n" + 
"C		Computer Speech and Language\n" + 
"C		Connection Science\n" + 
"C	DSS	Decision Support Systems\n" + 
"C	EAAI	Engineering Applications of Artificial Intelligence\n" + 
"C		Expert Systems\n" + 
"C	ESWA	Expert Systems with Applications\n" + 
"C		Fuzzy Sets and Systems\n" + 
"C	T-CIAIG	IEEE Transactions on Computational Intelligence and AI in Games\n" + 
"C	IET-CVI	IET Computer Vision\n" + 
"C		IET Signal Processing\n" + 
"C	IVC	Image and Vision Computing\n" + 
"C	IDA	Intelligent Data Analysis\n" + 
"C	IJCIA	International Journal of Computational Intelligence and Applications\n" + 
"C	IJDAR	International Journal on Document Analysis and Recognition\n" + 
"C	IJIS	International Journal of Intelligent Systems\n" + 
"C	IJNS	International Journal of Neural Systems\n" + 
"C	IJPRAI	International Journal of Pattern Recognition and Artificial Intelligence\n" + 
"C	IJUFKS	International Journal of Uncertainty, Fuzziness and Knowledge-Based Systems\n" + 
"C	JETAI	Journal of Experimental and Theoretical Artificial Intelligence\n" + 
"C	KBS	Knowledge-Based Systems\n" + 
"C		Machine Translation\n" + 
"C		Machine Vision and Applications\n" + 
"C		Natural Computing\n" + 
"C	NLE	Natural Language Engineering\n" + 
"C	NCA	Neural Computing & Applications\n" + 
"C	NPL	Neural Processing Letters\n" + 
"C		Neurocomputing\n" + 
"C	PAA	Pattern Analysis and Applications\n" + 
"C	PRL	Pattern Recognition Letters\n" + 
"C		Soft Computing\n" + 
"C	WIAS	Web Intelligence and Agent Systems\n" + 
"A	CCS	ACM Conference on Computer and Communications Security\n" + 
"A	CRYPTO	International Cryptology Conference\n" + 
"A	EUROCRYPT	European Cryptology Conference\n" + 
"A	S&P	IEEE Symposium on Security and Privacy\n" + 
"A	USENIX Security	Usenix Security Symposium\n" + 
"B	ACSAC	Annual Computer Security Applications Conference\n" + 
"B	ASIACRYPT	Annual International Conference on the Theory and Application of Cryptology and Information Security\n" + 
"B	ESORICS	European Symposium on Research in Computer Security\n" + 
"B	FSE	Fast Software Encryption\n" + 
"B	NDSS	ISOC Network and Distributed System Security Symposium\n" + 
"B	CSFW	IEEE Computer Security Foundations Workshop\n" + 
"B	RAID	International Symposium on Recent Advances in Intrusion Detection\n" + 
"B	PKC	International Workshop on Practice and Theory in Public Key Cryptography\n" + 
"B	DSN	The International Conference on Dependable Systems and Networks\n" + 
"B	TCC	Theory of Cryptography Conference Distributed Systems\n" + 
"B	SRDS	IEEE International Symposium on Reliable Distributed Systems\n" + 
"B	CHES	Workshop on Cryptographic Hardware and Embedded Systems\n" + 
"C	WiSec	ACM Conference on Security and Privacy in Wireless and Mobile Networks\n" + 
"C	ACM MM&SEC	ACM Multimedia and Security Workshop\n" + 
"C	SACMAT	ACM Symposium on Access Control Models and Technologies\n" + 
"C	ASIACCS	ACM Symposium on Information, Computer and Communications Security\n" + 
"C	DRM	ACM Workshop on Digital Rights Management\n" + 
"C	ACNS	Applied Cryptography and Network Security\n" + 
"C	ACISP	Australasia Conference on Information Security and Privacy\n" + 
"C	DFRWS	Digital Forensic Research Workshop\n" + 
"C	FC	Financial Cryptography and Data Security\n" + 
"C	DIMVA	Detection of Intrusions and Malware & Vulnerability Assessment\n" + 
"C	SEC	IFIP International Information Security Conference\n" + 
"C	IFIP WG 11.9	IFIP WG 11.9 International Conference on Digital Forensics\n" + 
"C	ISC	Information Security Conference\n" + 
"C	ICICS	International Conference on Information and Communications Security\n" + 
"C	SecureComm	International Conference on Security and Privacy in Communication Networks\n" + 
"C	NSPW	New Security Paradigms Workshop\n" + 
"C	CT-RSA	RSA Conference, Cryptographers' Track\n" + 
"C	SOUPS	Symposium On Usable Privacy and Security\n" + 
"C	HotSec	USENIX Workshop on Hot Topics in Security\n" + 
"C	SAC	Selected Areas in Cryptography\n" + 
"C	TrustCom	IEEE International Conference on Trust,  Security and Privacy in Computing and Communications\n" + 
"C	PAM	Passive and Active Measurement Conference\n" + 
"C	PETS	Privacy Enhancing Technologies Symposium\n" + 
"C		International Conference on Digital Forensics & Cyber Crime\n" + 
"A	TDSC	IEEE Transactions on Dependable and Secure Computing\n" + 
"A	TIFS	IEEE Transactions on Information Forensics and Security\n" + 
"A		Journal of Cryptology\n" + 
"B	TISSEC	ACM Transactions on Information and System Security\n" + 
"B		Computers & Security\n" + 
"B		Designs, Codes and Cryptography\n" + 
"B	JCS	Journal of Computer Security\n" + 
"C	CLSR	Computer Law and Security Reports\n" + 
"C		EURASIP Journal on Information Security\n" + 
"C		IET Information Security\n" + 
"C	IMCS	Information Management & Computer Security\n" + 
"C	ISTR	Information Security Technical Report\n" + 
"C	IJISP	International Journal of Information Security and Privacy\n" + 
"C	IJICS	International Journal of Information and Computer Security\n" + 
"C	SCN	Security and Communication Networks\n" + 
"A	ACM MM	ACM International Conference on Multimedia\n" + 
"A	SIGGRAPH	ACM SIGGRAPH Annual Conference\n" + 
"A	IEEE VIS	IEEE Visualization Conference\n" + 
"A	VR	IEEE Virtual Reality\n" + 
"B	ICMR	ACM SIGMM International Conference on Multimedia Retrieval\n" + 
"B	i3D	ACM Symposium on Interactive 3D Graphics\n" + 
"B	SCA	ACM/Eurographics Symposium on Computer Animation\n" + 
"B	DCC	Data Compression Conference\n" + 
"B	EG	Eurographics\n" + 
"B	EuroVis	Eurographics Conference on Visualization\n" + 
"B	SGP	Eurographics Symposium on Geometry Processing\n" + 
"B	EGSR	Eurographics Symposium on Rendering\n" + 
"B	ICME	IEEE International Conference on Multimedia & Expo\n" + 
"B	PG	Pacific Graphics: The Pacific Conference on Computer Graphics and Applications\n" + 
"B	SPM	Symposium on Solid and Physical Modeling\n" + 
"B	ICASSP	IEEE International Conference on Acoustics, Speech and SP\n" + 
"C	CASA	Computer Animation and Social Agents\n" + 
"C	CGI	Computer Graphics International\n" + 
"C	ISMAR	International Symposium on Mixed and Augmented Reality\n" + 
"C	PacificVis	IEEE Pacific Visualization Symposium\n" + 
"C	ICIP	International Conference on Image Processing\n" + 
"C	MMM	International Conference on Multimedia Modeling\n" + 
"C	GMP	Geometric Modeling and Processing\n" + 
"C	PCM	Pacific-Rim Conference on Multimedia\n" + 
"C	SMI	Shape Modeling International\n" + 
"C	INTER SPEECH	Conference of the International Speech Communication Association\n" + 
"C		ACM Symposium on Virtual Reality Software and Technology\n" + 
"A	TOG	ACM Transactions on Graphics\n" + 
"A	TIP	IEEE Transactions on Image Processing\n" + 
"A	TVCG	IEEE Transactions on Visualization and Computer Graphics\n" + 
"B	TOMCCAP	ACM Transactions on Multimedia Computing, Communications and Applications\n" + 
"B	CAD	Computer-Aided Design\n" + 
"B	CAGD	Computer Aided Geometric Design\n" + 
"B	CGF	Computer Graphics Forum\n" + 
"B	GM	Graphical Models\n" + 
"B	TCSVT	IEEE Transactions on Circuits and Systems for Video Technology\n" + 
"B	TMM	IEEE Transactions on Multimedia\n" + 
"B	JASA	Journal of The Acoustical Society of America\n" + 
"B	SIIMS	SIAM Journal on Imaging Sciences\n" + 
"B	Speech Com	Speech Communication\n" + 
"C	CAVW	Computer Animation and Virtual Worlds\n" + 
"C	C&G	Computers & Graphics-UK\n" + 
"C	CGTA	Computational Geometry: Theory and Applications\n" + 
"C	DCG	Discrete & Computational Geometry\n" + 
"C	IET-IPR	IET Image Processing\n" + 
"C		IEEE Signal Processing Letter\n" + 
"C	JVCIR	Journal of Visual Communication and Image Representation\n" + 
"C	MS	Multimedia Systems\n" + 
"C	MTA	Multimedia Tools and Applications\n" + 
"C		Signal Processing\n" + 
"C	SPIC	Signal processing : image communication\n" + 
"C	TVC	The Visual Computer\n" + 
"A	CHI	ACM Conference on Human Factors in Computing Systems\n" + 
"A	UbiComp	ACM International Conference on Ubiquitous Computing\n" + 
"A	CSCW	ACM Conference on Computer Supported Cooperative Work and Social Computing\n" + 
"B	IUI	ACM International Conference on Intelligent User Interfaces\n" + 
"B	ITS	ACM International Conference on Interactive Tabletops and Surfaces\n" + 
"B	UIST	ACM Symposium on User Interface Software and Technology\n" + 
"B	ECSCW	European Computer Supported Cooperative Work\n" + 
"B	MobileHCI	International Conference on Human Computer Interaction with Mobile Devices and Services\n" + 
"B	PERCOM	IEEE International Conference on Pervasive Computing and Communications\n" + 
"B	GROUP	ACM Conference on Supporting Group Work\n" + 
"C	ASSETS	ACM SIGACCESS Conference on Computers and Accessibility\n" + 
"C	DIS	ACM Conference on Designing Interactive  Systems\n" + 
"C	GI	Graphics Interface conference\n" + 
"C	MobiQuitous	International Conference on Mobile and Ubiquitous Systems: Computing,   Networking and Services\n" + 
"C	INTERACT	IFIP TC13 Conference on Human-Computer Interaction\n" + 
"C	CoopIS	International Conference on Cooperative  Information Systems\n" + 
"C	ICMI 	ACM International Conference on Multimodal  Interaction\n" + 
"C	IDC	Interaction Design and Children\n" + 
"C	AVI	International Working Conference on Advanced  Visual Interfaces\n" + 
"C	UIC	IEEE International Conference on Ubiquitous Intelligence and Computing\n" + 
"C	DIS	ACM Conference on Designing Interactive  Systems\n" + 
"C		IEEE World Haptics Conference\n" + 
"C	CSCWD	International Conference on Computer Supported Cooperative Work in Design\n" + 
"C	Collaborate Com	International Conference on Collaborative Computing\n" + 
"A	TOCHI	ACM Transactions on Computer-Human Interaction\n" + 
"A	IJHCS	International Journal of Human Computer Studies\n" + 
"B	CSCW	Computer Supported Cooperative Work\n" + 
"B	HCI	Human Computer Interaction\n" + 
"B	IWC	Interacting with Computers\n" + 
"B	UMUAI	User Modeling and User-Adapted Interaction\n" + 
"B	IJHCI	International Journal of Human-Computer Interaction\n" + 
"B		IEEE Transactions on Human-Machine Systems\n" + 
"C	BIT	Behaviour & Information Technology\n" + 
"C	PMC	Pervasive and Mobile Computing\n" + 
"C	PUC	Personal and Ubiquitous Computing\n" + 
"A	STOC	ACM Symposium on Theory of Computing\n" + 
"A	FOCS	IEEE Symposium on Foundations of Computer Science\n" + 
"A	LICS	IEEE Symposium on Logic in Computer Science\n" + 
"A	CAV	Computer Aided Verification\n" + 
"B	SoCG	ACM Symposium on Computational Geometry\n" + 
"B	SODA	ACM-SIAM Symposium on Discrete Algorithms\n" + 
"B	CADE/IJCAR	Conference on Automated Deduction/The International Joint Conference on Automated Reasoning\n" + 
"B	CCC	IEEE Conference on Computational Complexity\n" + 
"B	ICALP	International Colloquium on Automata, Languages and Programming\n" + 
"B	CONCUR	International Conference on Concurrency Theory\n" + 
"B	HSCC	International Conference on Hybrid Systems: Computation and Control\n" + 
"B	ESA	European Symposium on Algorithms\n" + 
"C	CSL	Computer Science Logic\n" + 
"C	FSTTCS	Foundations of Software Technology and Theoretical Computer Science\n" + 
"C	IPCO	International Conference on Integer Programming and Combinatorial Optimization\n" + 
"C	RTA	International Conference on Rewriting Techniques and Applications\n" + 
"C	ISAAC	International Symposium on Algorithms and Computation\n" + 
"C	MFCS	Mathematical Foundations of Computer Science\n" + 
"C	STACS	Symposium on Theoretical Aspects of Computer Science\n" + 
"C	FMCAD	Formal Method in Computer-Aided Design\n" + 
"C	SAT	Theory and Applications of Satisfiability Testing\n" + 
"C	ICTAC	International Colloquium on Theoretical Aspects of Computing\n" + 
"A	IANDC	Information and Computation\n" + 
"A	SICOMP	SIAM Journal on Computing\n" + 
"A	TIT	IEEE Transactions on Information Theory\n" + 
"B	TALG	ACM Transactions on Algorithms\n" + 
"B	TOCL	ACM Transactions on Computational Logic\n" + 
"B	TOMS	ACM Transactions on Mathematical Software\n" + 
"B	Algorithmica	Algorithmica\n" + 
"B	CC	Computational complexity\n" + 
"B	FAC	Formal Aspects of Computing\n" + 
"B	FMSD	Formal Methods in System Design\n" + 
"B	INFORMS	INFORMS Journal on Computing\n" + 
"B	JCSS	Journal of Computer and System Sciences\n" + 
"B	JGO	Journal of Global Optimization\n" + 
"B	JSC	Journal of Symbolic Computation\n" + 
"B	MSCS	Mathematical Structures in Computer Science\n" + 
"B	TCS	Theoretical Computer Science\n" + 
"C	APAL	Annals of Pure and Applied Logic\n" + 
"C	ACTA	Acta Informatica\n" + 
"C	DAM	Discrete Applied Mathematics\n" + 
"C	FUIN	Fundamenta Informaticae\n" + 
"C	LISP	Higher-Order and Symbolic Computation\n" + 
"C	IPL	Information Processing Letters\n" + 
"C	JCOMPLEXITY	Journal of Complexity\n" + 
"C	LOGCOM	Journal of Logic and Computation\n" + 
"C		Journal of Symbolic Logic\n" + 
"C	LMCS	Logical Methods in Computer Science\n" + 
"C	SIDMA	SIAM Journal on Discrete Mathematics\n" + 
"C		Theory of Computing Systems\n" + 
"A	RTSS	Real-Time Systems Symposium\n" + 
"A	WWW	International World Wide Web Conferences\n" + 
"B	EMSOFT	International Conference on Embedded Software\n" + 
"B	ISMB	International conference on Intelligent Systems for Molecular Biology\n" + 
"B	CogSci	Cognitive Science Society Annual Conference\n" + 
"B	RECOMB	International Conference on Research in Computational Molecular Biology\n" + 
"B	BIBM	IEEE International Conference on Bioinformatics and Biomedicine\n" + 
"C	AMIA	American Medical Informatics Association Annual Symposium\n" + 
"C	APBC	Asia Pacific Bioinformatics Conference\n" + 
"C	COSIT	International Conference on Spatial Information Theory\n" + 
"C		IEEE International Conference on Cloud Computing\n" + 
"A	Proc. IEEE	Proceedings of the IEEE\n" + 
"A	JACM	Journal of the ACM\n" + 
"B		Bioinformatics\n" + 
"B		Briefings in Bioinformatics\n" + 
"B	Cognition	Cognition：International Journal of Cognitive Science\n" + 
"B		PLOS Computational Biology\n" + 
"B	TMI	IEEE Transactions on Medical Imaging\n" + 
"B	TGARS	IEEE Transactions on Geoscience and Remote Sensing\n" + 
"B	TITS	IEEE Transactions on Intelligent Transportation Systems\n" + 
"B	TR	IEEE Transactions on Robotics\n" + 
"B	TASAE	IEEE Transactions on Automation Science and Engineering\n" + 
"B	JCST	Journal of Computer Science and Technology\n" + 
"B	JAMIA	Journal of the American Medical Informatics Association\n" + 
"B		Science China Information Sciences\n" + 
"B		The Computer Journal\n" + 
"B		World Wide Web Journal\n" + 
"C		BMC Bioinformatics\n" + 
"C		Cybernetics and Systems\n" + 
"C		IEEE Geoscience and Remote Sensing Letters\n" + 
"C	TITB	IEEE Transactions on Information Technology in Biomedicine\n" + 
"C	TCBB	IEEE-ACM Transactions on Computational Biology and Bioinformatics\n" + 
"C		IET Intelligent Transport Systems\n" + 
"C		Medical Image Analysis\n" + 
"C	FCS	Frontiers of Computer Science\n" + 
"A	FSE/ESEC	ACM SIGSOFT Symposium on the Foundation of Software Engineering/ European Software Engineering Conference\n" + 
"A	OOPSLA	Conference on Object-Oriented Programming Systems, Languages, and Applications\n" + 
"A	ICSE	International Conference on Software Engineering\n" + 
"A	OSDI	USENIX Symposium on Operating Systems Design and Implementations\n" + 
"A	PLDI	ACM SIGPLAN Symposium on Programming Language Design & Implementation\n" + 
"A	POPL	ACM SIGPLAN-SIGACT Symposium on Principles of Programming Languages\n" + 
"A	SOSP	ACM Symposium on Operating Systems Principles\n" + 
"A	ASE	International Conference on Automated Software Engineering\n" + 
"B	ECOOP	European Conference on Object-Oriented Programming\n" + 
"B	ETAPS	European Joint Conferences on Theory and Practice of Software\n" + 
"B	FM	World Congress on Formal Methods\n" + 
"B	ICPC	IEEE International Conference on Program Comprehension\n" + 
"B	RE	IEEE International Requirement Engineering Conference\n" + 
"B	CAiSE	International Conference on Advanced Information Systems Engineering\n" + 
"B	ICFP	International Conference on Function Programming\n" + 
"B	LCTES	International Conference on Languages, Compilers, Tools and Theory for Embedded Systems\n" + 
"B	MoDELS	International Conference on Model Driven Engineering Languages and Systems\n" + 
"B	CP	International Conference on Principles and Practice of Constraint Programming\n" + 
"B	ICSOC	International Conference on Service Oriented Computing\n" + 
"B	ICSME	International Conference on Software Maintenance and Evolution\n" + 
"B	VMCAI	International Conference on Verification, Model Checking, and Abstract Interpretation\n" + 
"B	ICWS	International Conference on Web Services （Research Track）\n" + 
"B	SAS	International Static Analysis Symposium\n" + 
"B	ISSRE	International Symposium on Software Reliability Engineering\n" + 
"B	ISSTA	International Symposium on Software Testing and Analysis\n" + 
"B	Middleware	Conference on middleware\n" + 
"B	SANER	International Conference on Software Analysis, Evolution, and Reengineering\n" + 
"B	HotOS	USENIX Workshop on Hot Topics in Operating Systems\n" + 
"B	ESEM	International Symposium on Empirical Software Engineering and Measurement\n" + 
"C	PASTE	ACMSIGPLAN-SIGSOFT Workshop on Program Analysis for Software Tools and Engineering\n" + 
"C	APLAS	Asian Symposium on Programming Languages and Systems\n" + 
"C	APSEC	Asia-Pacific Software Engineerin g Conference\n" + 
"C	COMPSAC	International Computer Software and Applications Conference\n" + 
"C	ICECCS	IEEE International Conference on Engineering of Complex Computer Systems\n" + 
"C	SCAM	IEEE International Working Conference on Source Code Analysis and Manipulation\n" + 
"C	ICFEM	International Conference on Formal Engineering Methods\n" + 
"C	TOOLS	International Conference on Objects, Models, Components, Patterns\n" + 
"C	PEPM	ACM SIGPLAN Symposium on Partial Evaluation and Semantics Based Programming Manipulation\n" + 
"C	QRS	The IEEE International Conference on Software Quality, Reliability and Security\n" + 
"C	SEKE	International Conference on Software Engineering and Knowledge Engineering\n" + 
"C	ICSR	International Conference on Software Reuse\n" + 
"C	ICWE	International Conference on Web Engineering\n" + 
"C	SPIN	International SPIN Workshop on Model Checking of Software\n" + 
"C	LOPSTR	International Symposium on Logic-based Program Synthesis and Transformation\n" + 
"C	TASE	International Symposium on Theoretical Aspects of Software Engineering\n" + 
"C	ICST	The IEEE International Conference on Software Testing, Verification and Validation\n" + 
"C	ATVA	International Symposium on Automated Technology for Verification and Analysis\n" + 
"C	ISPASS	IEEE International Symposium on Performance Analysis of Systems and Software\n" + 
"C	SCC	International Conference on Service Computing\n" + 
"C	ICSSP	International Conference on Software and System Process\n" + 
"C	MSR	Working Conference on Mining Software Repositories\n" + 
"C	REFSQ	Requirements Engineering: Foundation for Software Quality\n" + 
"C	WICSA	Working IEEE/IFIP Conference on Software Architecture\n" + 
"C	EASE	Evaluation and Assessment in Software Engineering\n" + 
"A	TOPLAS	ACM Transactions on Programming Languages & Systems\n" + 
"A	TOSEM	ACM Transactions on Software Engineering Methodology\n" + 
"A	TSE	IEEE Transactions on Software Engineering\n" + 
"B	ASE	Automated Software Engineering\n" + 
"B	ESE	Empirical Software Engineering\n" + 
"B	TSC	IEEE Transactions on Service Computing\n" + 
"B	IETS	IET Software\n" + 
"B	IST	Information and Software Technology\n" + 
"B	JFP	Journal of Functional Programming\n" + 
"B		Journal of Software: Evolution and Process\n" + 
"B	JSS	Journal of Systems and Software\n" + 
"B	RE	Requirements Engineering\n" + 
"B	SCP	Science of Computer Programming\n" + 
"B	SoSyM	Software and System Modeling\n" + 
"B	SPE	Software: Practice and Experience\n" + 
"B	STVR	Software Testing, Verification and Reliability\n" + 
"C	CL	Computer Languages, Systems and Structures\n" + 
"C	IJSEKE	International Journal on Software Engineering and Knowledge Engineering\n" + 
"C	STTT	International Journal on Software Tools for Technology Transfer\n" + 
"C	JLAP	Journal of Logic and Algebraic Programming\n" + 
"C	JWE	Journal of Web Engineering\n" + 
"C	SOCA	Service Oriented Computing and Applications\n" + 
"C	SQJ	Software Quality Journal\n" + 
"C	TPLP	Theory and Practice of Logic Programming\n" + 
"A	SIGMOD	ACM Conference on Management of Data\n" + 
"A	SIGKDD	ACM Knowledge Discovery and Data Mining\n" + 
"A	SIGIR	International Conference on Research on Development in Information Retrieval\n" + 
"A	VLDB	International Conference on Very Large Data Bases\n" + 
"A	ICDE	IEEE International Conference on Data Engineering\n" + 
"B	CIKM	ACM International Conference on Information and Knowledge Management\n" + 
"B	PODS	ACM SIGMOD Conference on Principles of DB Systems\n" + 
"B	DASFAA	Database Systems for Advanced Applications\n" + 
"B	ECML-PKDD	European Conference on Machine Learning and Principles and Practice of Knowledge Discovery in Databases\n" + 
"B	ISWC	IEEE International Semantic Web Conference\n" + 
"B	ICDM	International Conference on Data Mining\n" + 
"B	ICDT	International Conference on Database Theory\n" + 
"B	EDBT	International Conference on Extending DB Technology\n" + 
"B	CIDR	International Conference on Innovation Database Research\n" + 
"B	SDM	SIAM International Conference on Data Mining\n" + 
"B	WSDM	ACM International Conference on Web Search and Data Mining\n" + 
"C	DEXA	Database and Expert System Applications\n" + 
"C	ECIR	European Conference on IR Research\n" + 
"C	WebDB	International ACM Workshop on Web and Databases\n" + 
"C	ER	International Conference on Conceptual Modeling\n" + 
"C	MDM	International Conference on Mobile Data Management\n" + 
"C	SSDBM	International Conference on Scientific and Statistical DB Management\n" + 
"C	WAIM	International Conference on Web Age Information Management\n" + 
"C	SSTD	International Symposium on Spatial and Temporal Databases\n" + 
"C	PAKDD	Pacific-Asia Conference on Knowledge Discovery and Data Mining\n" + 
"C	APWeb	The Asia Pacific Web Conference\n" + 
"C	WISE	Web Information Systems Engineering\n" + 
"C	ESWC	Extended Semantic Web Conference\n" + 
"A	TODS	ACM Transactions on Database Systems\n" + 
"A	TOIS	ACM Transactions on Information Systems\n" + 
"A	TKDE	IEEE Transactions on Knowledge and Data Engineering\n" + 
"A	VLDBJ	VLDB Journal\n" + 
"B	TKDD	ACM Transactions on Knowledge Discovery from Data\n" + 
"B	AEI	Advanced Engineering Informatics\n" + 
"B	DKE	Data and Knowledge Engineering\n" + 
"B	DMKD	Data Mining and Knowledge Discovery\n" + 
"B	EJIS	European Journal of Information Systems\n" + 
"B		GeoInformatica\n" + 
"B	IPM	Information Processing and Management\n" + 
"B		Information Sciences\n" + 
"B	IS	Information Systems\n" + 
"B	JASIST	Journal of the American Society for Information Science and Technology\n" + 
"B	JWS	Journal of Web Semantics\n" + 
"B	KIS	Knowledge and Information Systems\n" + 
"B	TWEB	ACM Transactions on the Web\n" + 
"C	DPD	Distributed and Parallel Databases\n" + 
"C	I&M	Information and Management\n" + 
"C	IPL	Information Processing Letters\n" + 
"C	IR	Information Retrieval\n" + 
"C	IJCIS	International Journal of Cooperative Information Systems\n" + 
"C	IJGIS	International Journal of Geographical Information Science\n" + 
"C	IJIS	International Journal of Intelligent Systems\n" + 
"C	IJKM	International Journal of Knowledge Management\n" + 
"C	IJSWIS	International Journal on Semantic Web and Information Systems\n" + 
"C	JCIS	Journal of Computer Information Systems\n" + 
"C	JDM	Journal of Database Management\n" + 
"C	JGITM	Journal of Global Information Technology Management\n" + 
"C	JIIS	Journal of Intelligent Information Systems\n" + 
"C	JSIS	Journal of Strategic Information Systems\n" + 
"A	MOBICOM	ACM International Conference on Mobile Computing and Networking\n" + 
"A	SIGCOMM	ACM International Conference on the applications, technologies, architectures, and protocols for computer communication\n" + 
"A	INFOCOM	IEEE International Conference on Computer Communications\n" + 
"B	SenSys	ACM Conference on Embedded Networked Sensor Systems\n" + 
"B	CoNEXT	ACM International Conference on emerging Networking EXperiments and Technologies\n" + 
"B	SECON	IEEE Communications Society Conference on Sensor and Ad Hoc Communications and Networks\n" + 
"B	IPSN	International Conference on Information Processing in Sensor Networks\n" + 
"B	ICNP	International Conference on Network Protocols\n" + 
"B	MobiHoc	International Symposium on Mobile Ad Hoc Networking and Computing\n" + 
"B	MobiSys	International Conference on Mobile Systems, Applications, and Services\n" + 
"B	IWQoS	International Workshop on Quality of Service\n" + 
"B	IMC	Internet Measurement Conference\n" + 
"B	NOSSDAV	Network and Operating System Support for Digital Audio and Video\n" + 
"B	NSDI	Symposium on Network System Design and Implementation\n" + 
"C	ANCS	Architectures for Networking and Communications Systems\n" + 
"C	FORTE	Formal Techniques for Networked and Distributed Systems\n" + 
"C	LCN	IEEE Conference on Local Computer Networks\n" + 
"C	Globecom	IEEE Global Communications Conference, incorporating the Global Internet Symposium\n" + 
"C	ICC	IEEE International Conference on Communications\n" + 
"C	ICCCN	IEEE International Conference on Computer Communications and Networks\n" + 
"C	MASS	IEEE International Conference on Mobile Ad hoc and Sensor Systems\n" + 
"C	P2P	IEEE International Conference on P2P Computing\n" + 
"C	IPCCC	IEEE International Performance Computing and Communications Conference\n" + 
"C	WoWMoM	IEEE International Symposium on a World of Wireless Mobile and Multimedia Networks\n" + 
"C	ISCC	IEEE Symposium on Computers and Communications\n" + 
"C	WCNC	IEEE Wireless Communications & Networking Conference\n" + 
"C	Networking	IFIP International Conferences on Networking\n" + 
"C	IM	IFIP/IEEE International Symposium on Integrated Network Management\n" + 
"C	MSWiM	International Conference on Modeling, Analysis and Simulation of Wireless and Mobile Systems\n" + 
"C	NOMS	Asia-Pacific Network Operations and Management Symposium\n" + 
"C	HotNets	The Workshop on Hot Topics in Networks\n" + 
"C	WASA	International Conference on Wireless Algorithms, Systems, and Applications\n" + 
"A	TON	IEEE/ACM Transactions on Networking\n" + 
"A	JSAC	IEEE Journal of Selected Areas in Communications\n" + 
"A	TMC	IEEE Transactions on Mobile Computing\n" + 
"B	TOIT	ACM Transactions on Internet Technology\n" + 
"B	TOMCCAP	ACM Transactions on Multimedia Computing, Communications and Applications\n" + 
"B	TOSN	ACM Transactions on Sensor Networks\n" + 
"B	CN	Computer Networks\n" + 
"B	TOC	IEEE Transactions on Communications\n" + 
"B	TWC	IEEE Transactions on Wireless Communications\n" + 
"C		Ad hoc Networks\n" + 
"C	CC	Computer Communications\n" + 
"C	TNSM	IEEE Transactions on Network and Service Management\n" + 
"C		IET Communications\n" + 
"C	JNCA	Journal of Network and Computer Applications\n" + 
"C	MONET	Mobile Networks & Applications\n" + 
"C		Networks\n" + 
"C	PPNA	Peer-to-Peer Networking and Applications\n" + 
"C	WCMC	Wireless Communications & Mobile Computing\n" + 
"C		Wireless Networks\n" + 
"A	ASPLOS	Architectural Support for Programming Languages and Operating Systems\n" + 
"A	FAST	Conference on File and Storage Technologies\n" + 
"A	HPCA	High-Performance Computer Architecture\n" + 
"A	ISCA	International Symposium on Computer Architecture\n" + 
"A	MICRO	MICRO\n" + 
"A	SC	International Conference for High Performance Computing, Networking, Storage, and Analysis\n" + 
"A	USENIX ATC	USENIX Annul Technical Conference\n" + 
"A	PPoPP	Principles and Practice of Parallel Programming\n" + 
"B	HOT CHIPS	ACM Symposium on High Performance Chips\n" + 
"B	SPAA	ACM Symposium on Parallelism in Algorithms and Architectures\n" + 
"B	PODC	ACM Symposium on Principles of Distributed Computing\n" + 
"B	CGO	Code Generation and Optimization\n" + 
"B	DAC	Design Automation Conference\n" + 
"B	DATE	Design, Automation & Test in Europe Conference\n" + 
"B	EuroSys	EuroSys\n" + 
"B	HPDC	High-Performance Distributed Computing\n" + 
"B	ICCD	International Conference on Computer Design\n" + 
"B	ICCAD	International Conference on Computer-Aided Design\n" + 
"B	ICDCS	International Conference on Distributed Computing Systems\n" + 
"B	HiPEAC	International Conference on High Performance and Embedded Architectures and Compilers\n" + 
"B	SIGMETRICS	International Conference on Measurement and Modeling of Computer Systems\n" + 
"B	ICPP	International Conference on Parallel Processing\n" + 
"B	ICS	International Conference on Supercomputing\n" + 
"B	IPDPS	International Parallel & Distributed Processing Symposium\n" + 
"B	FPGA	ACM/SIGDA International Symposium on Field-Programmable Gate Arrays\n" + 
"B	 Performance	International Symposium on Computer Performance, Modeling, Measurements and Evaluation\n" + 
"B	LISA	Large Installation system Administration Conference\n" + 
"B	MSST	Mass Storage Systems and Technologies\n" + 
"B	PACT	Parallel Architectures and Compilation Techniques\n" + 
"B	RTAS	Real-Time and Embedded Technology and Applications Symposium\n" + 
"B	VEE	Virtual Execution Environments\n" + 
"B	CODES+ISSS	ACM/IEEE Conf. Hardware/Software Co-design and System Synthesis\n" + 
"B	ITC	International Test Conference\n" + 
"B	SOCC	ACM Symposium on Cloud Computing\n" + 
"C	CF	ACM International Conference on Computing Frontiers\n" + 
"C	NOCS	ACM/IEEE International Symposium on Networks-on-Chip\n" + 
"C	ASP-DAC	Asia and South Pacific Design Automation Conference\n" + 
"C	ASAP	Application-Specific Systems, Architectures, and Processors\n" + 
"C	CLUSTER	Cluster Computing\n" + 
"C	CCGRID	Cluster Computing and the Grid\n" + 
"C	Euro-Par	European Conference on Parallel and Distributed Computing\n" + 
"C	ETS	European Test Symposium\n" + 
"C	FPL	Field Programmable Logic and Applications\n" + 
"C	FCCM	Field-Programmable Custom Computing Machines\n" + 
"C	GLSVLSI	Great Lakes Symposium on VLSI Systems\n" + 
"C	HPCC	IEEE International Conference on High Performance Computing and Communications\n" + 
"C	MASCOTS	IEEE International Symposium on Modeling, Analysis, and Simulation of Computer and Telecommunication Systems\n" + 
"C	NPC	IFIP International Conference on Network and Parallel Computing\n" + 
"C	ICA3PP	International Conference on Algorithms and Architectures for Parallel Processing\n" + 
"C	CASES	International Conference on Compilers, Architectures, and Synthesis for Embedded Systems\n" + 
"C	FPT	International Conference on Field-Programmable Technology\n" + 
"C	HPC	International Conference on High Performance Computing\n" + 
"C	ICPADS	International Conference on Parallel and Distributed Systems\n" + 
"C	ISCAS	International Symposium on Circuits and Systems\n" + 
"C	ISLPED	International Symposium on Low Power Electronics and Design\n" + 
"C	ISPD	International Symposium on Physical Design\n" + 
"C	Hot Interconnects	Symposium on High-Performance Interconnects\n" + 
"C	VTS	VLSI Test Symposium\n" + 
"C	ISPA	Symposium on Parallel and Distributed Processing with Applications\n" + 
"C	SYSTOR	ACM SIGOPS International Systems and Storage Conference\n" + 
"C	ATS	IEEE Asian Test Symposium\n" + 
"A	TOCS	ACM Transactions on Computer Systems\n" + 
"A	TOC	IEEE Transactions on Computers\n" + 
"A	TPDS	IEEE Transactions on Parallel and Distributed Systems\n" + 
"A	TCAD	IEEE Transactions On Computer-Aided Design Of Integrated Circuits And System\n" + 
"A	TOS	ACM Transactions on Storage\n" + 
"B	TACO	ACM Transactions on Architecture and Code Optimization\n" + 
"B	TAAS	ACM Transactions on Autonomous and Adaptive Systems\n" + 
"B	TODAES	ACM Transactions on Design Automation of Electronic Systems\n" + 
"B	TECS	ACM Transactions on Embedded Computing Systems\n" + 
"B	TRETS	ACM Transactions on Reconfigurable Technology and Systems\n" + 
"B	TVLSI	IEEE Transactions on VLSI Systems\n" + 
"B	JPDC	Journal of Parallel and Distributed Computing\n" + 
"B	PARCO	Parallel Computing\n" + 
"B		Performance Evaluation: An International Journal\n" + 
"B	JSA	Journal of Systems Architecture\n" + 
"C		Concurrency and Computation: Practice and Experience\n" + 
"C	DC	Distributed Computing\n" + 
"C	FGCS	Future Generation Computer Systems\n" + 
"C	Integration	Integration, the VLSI Journal\n" + 
"C		Microprocessors and Microsystems: Embedded Hardware Design\n" + 
"C	JGC	The Journal of Grid computing\n" + 
"C	TJSC	The Journal of Supercomputing\n" + 
"C	JETC	The ACM Journal on Emerging Technologies in Computing Systems\n" + 
"C	JET	Journal of Electronic Testing-Theory and Applications\n" + 
"C	RTS	Real-Time Systems";

var ccfRankingFullName = {};
var ccfRankingAbbrName = {}
for(x of rawRankingString.split('\n')){
    y = x.split('\t');
    if(y[1] != ""){
        if(ccfRankingAbbrName[y[1]] == undefined){
            ccfRankingAbbrName[y[1]] = {};
        }
        ccfRankingAbbrName[y[1]][y[2]] = y[0];
    }
    ccfRankingFullName[y[2]] = y[0];
}

const fs = require('fs');
fs.writeFileSync('ccfRankingAbbrName.js',"ccf.rankingAbbrName = " + JSON.stringify(ccfRankingAbbrName),'utf8');
fs.writeFileSync('ccfRankingFullName.js',"ccf.rankingFullName = " + JSON.stringify(ccfRankingFullName),'utf8');
