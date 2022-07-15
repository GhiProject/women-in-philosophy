import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import Member from "../components/member";

const profileImage = {};

export default function About() {
  const data = useStaticQuery(graphql`
    {
      photos: allFile(filter: { relativeDirectory: { eq: "members" } }) {
        edges {
          node {
            name
            childImageSharp {
              fixed(height: 125) {
                ...GatsbyImageSharpFixed_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  `);

  // Map images into Map
  data.photos.edges.forEach((f) => {
    profileImage[f.node.name] = f.node.childImageSharp.fixed;
  });

  return (
    <Layout>
      <strong>Contact us at:</strong>{" "}
      <a href="mailto:demphilproj@gmail.com">demphilproj@gmail.com</a>
      <br />
      <br />
      <h1>Directors</h1>
      <Member
        name="Nicole Hassoun"
        photo={profileImage.Hassoun}
        position="(Executive Director)"
        className="pi"
      >
        Nicole Hassoun is a professor in philosophy at Binghamton University. Her book Globalization and Global Justice: Shrinking Distance, Expanding Obligations (Cambridge University Press, 2012) was runner up for the APA book prize and her articles appear in journals like the American Philosophical Quarterly, Journal of Development Economics, The Australasian Journal of Philosophy, PLOS ONE, The European Journal of Philosophy, and Utilitas.
      </Member>
      <Member
        name="Eric Schwitzgebel"
        photo={profileImage.schwitzgebel}
        position="(Co-Director)"
        className="pi"
      >
        Eric Schwitzgebel is a Professor of Philosophy at the University of California, Riverside. Recent works include: A Theory of Jerks, and Other Philosophical Misadventures (MIT Press, 2019), Perplexities of Consciousness (MIT Press, 2011), “A Theory of Jerks” (Aeon Magazine, 2014), and “1% Skepticism” (Nous, forthcoming). He is a member of the APA Committee on the Status and Future of the Profession. On his blog, and more recently in op-eds for The Los Angeles Times, he regularly critiques the narrowness and homogeneity of academic philosophy in the mainstream Anglophone tradition.
      </Member>
      <Member
        name="Sherri Conklin "
        photo={profileImage.conklin}
        position="(Co-Director)"
        className="pi"
      >
        Sherri Conklin recently earned her PhD in Philosophy at UCSB, and is Currently a lecturer for the Department of Philosophy at University of Colorado Boulder. Sherri conducts research in marginalization in Philosophy professions, moral worth, normative theory, and moral psychology.
      </Member>
      <Member
        name="Elly Vintiadis"
        photo={profileImage.vintiadis}
        position="(Co-Director)"
        className="pi"
      >
        Elly Vintiadis teaches philosophy at Deree - The American college of Greece. Her work is mainly in the philosophy of mind and of psychiatry but also in epistemology, animal ethics and metaphilosophy. She is editor of Philosophy by Women (Routledge, 2020), first editor of Brute Facts (Oxford University Press, 2018) and author of Animals and US (in Greek -EP Books, 2020). She also writes for a wider audience – both because she enjoys it and because she believes it is important that philosophical thinking is available and accessible to the wider public beyond academia.
      </Member>
      <Member
        name="Björn Freter"
        photo={profileImage.freter}
        position="(Co-Director)"
        className="pi"
      >
        Björn lives in Knoxville, TN, USA and works as Lecturer for World Philosophy at the School of Oriental and African Studies (SOAS) at the University of London, UK. He has published on a variety of topics, including pre-Socratic philosophy, baroque and classical German literature as well as African Philosophy, Matters of Decolonization, White Supremacy, Misogyny and Veganism. His current main research project aims at the Desuperiorization of Philosophy, ie. developing a radically anti-oppressive moral philosophy, and at the Foundation of Superaltern Studies, a research area investigating the western superiorist traditions and its self-representation as global moral authority.
      </Member>
      <h1>Advisory Board</h1>
      <Member
        name="Sally Haslanger"
        photo={profileImage.haslanger}
        position=""
        className="advisor"
      >
        Sally Haslanger is a Ford professor of Philosophy and Women's and Gender Studies at the Massachusetts Institute of Technology. She specializes in metaphysics, epistemology, feminist theory, and critical race theory. Her book Resisting Reality: Social Construction and Social Critique (Oxford 2012) won the Joseph B. Gittler award for work in philosophy of the social sciences. She was elected to the American Academy of Arts and Sciences in 2015.
      </Member>
      <Member
        name="Tom Dougherty"
        photo={profileImage.dougherty}
        position=""
        className="advisor"
      >
        Tom Dougherty is an associate Professor in philosophy at the University of North Carolina at Chapel Hill. Formerly, he worked as a University Lecturer in the Philosophy Faculty at the University of Cambridge and a Fellow of Trinity Hall. His research focuses on moral and political philosophy, as well as consequentialism, and he is currently writing books on the ethics of consent.
      </Member>
      <Member
        name="Kathryn Norlock"
        photo={profileImage.norlock}
        position=""
        className="advisor"
      >
        Kathryn Norlock is the inaugural Kenneth Mark Drain Endowed Chair in Ethics, the Chair of the Department of Philosophy at Trent University in Peterborough, Ontario, Canada. She is also an affiliated faculty member in Sustainability Studies, and an associated faculty member in Gender and Women's Studies at Trent University. She is the former President of the Society for Analytical Feminism (SAF), and past president of the Canadian Society for Women In Philosophy (CSWIP). She is a co-founder and co-editor of Feminist Philosophy Quarterly, an open-access, peer-reviewed journal.
      </Member>
      <Member
        name="Edouard Machery"
        photo={profileImage.machery}
        position=""
        className="advisor"
      >
        Edouard Machery is a Distinguished Professor of philosophy at the University of Pittsburgh, as well as the Director of History and Philosophy of Science at the University of Pittsburgh. His research focuses on the philosophical issues raised by psychology and cognitive neuroscience. He was awarded the Chancellor’s Distinguished Research Award by the University of Pittsburgh, the Stanton Prize by the Society for Philosophy and Psychology, and holds a Regular Visiting Distinguished Professorship at Eidyn (Edinburgh).
      </Member>
      <Member
        name="Carolyn Jennings"
        photo={profileImage.jennings}
        position=""
        className="advisor"
      >
        Carolyn Jennings is an Associate Professor of Philosophy and Cognitive Sciences at University of California Merced. Her work is centered around attention. She recently published her debut book, The Attending Mind, with Cambridge University Press in 2020. Some of her notable work includes: “Action without Attention” (with B. Nanay, Analysis, forthcoming), “The Standard Theory of Conscious Perception” (Proceedings of the 37th Annual Conference of the Cognitive Science Society, 2015), “Consciousness without Attention” (Journal of the American Philosophical Association, 2015), 'Attention and Perceptual Organization' (Philosophical Studies, 2015), 'The Subject of Attention' (Synthese, 2012), and “Inductive Parsimony and the Methodological Argument” (Consciousness & Cognition, 2012).
      </Member>
      <Member
        name="Michael Rea"
        photo={profileImage.rea}
        position=""
        className="advisor"
      >
        Michael Rea is a Rev. John A. O’Brien Professor of Philosophy at the University of Notre Dame, and is Concurrent Faculty in the Notre Dame Gender Studies Program. He is the Director for the Center for Philosophy of Religion at Notre Dame. His research focuses primarily on topics in metaphysics, philosophy of religion, and analytic theology.
      </Member>
      <Member
        name="Julie Van Camp"
        photo={profileImage.vancamp}
        position=""
        className="advisor"
      >
        Julie C. Vancamp is a Professor Emerita of Philosophy at California State University, Long Beach, where she teaches philosophy of law and applied ethics. She is currently Executive Director & Secretary-Treasurer of the American Society for Aesthetics. She was privileged to study with Elizabeth Lane Beardsley at Temple University and inspired to encourage women to pursue philosophy by a former male colleague who told her long ago that 'female philosopher is an oxymoron.'
      </Member>
      <Member
        name="Kenneth Clatterbaugh"
        photo={profileImage.clatterbaugh}
        position=""
        className="advisor"
      >
        Kenneth C. Clatterbaugh is an American philosopher. He was Chair of the department of Philosophy at the University of Washington for fifteen years. He retired in 2012. His interests are modern philosophy, social philosophy, and gender studies.
      </Member>
      <Member
        name="In Memoriam Charles Mills"
        photo={profileImage.mills}
        position=""
        className="advisor"
      >
        Charles W. Mills was a Distinguished Professor of Philosophy at the Graduate Center CUNY. Formerly, he taught at the University of Oklahoma, the University of Illinois at Chicago, and Northwestern University. He was also the President of the American Philosophical Association Central Division. His research also explored social and political philosophy, Africana philosophy, critical philosophy of race, and ethics. He is remembered with adoration and respect by his colleagues and community.
      </Member>
      <Member
        name="Meena Krishnamurthy"
        photo={profileImage.krishnamurthy}
        position=""
        className="advisor"
      >
        Meena Krishnamurthy is an Assistant Professor in the Department of Philosophy at Queen’s University. Previously she was an Assistant Professor in the Department of Philosophy and in the Program in Philosophy, Politics, and Economics at the University of Michigan. She is a political philosopher who works mostly in the area of normative democratic theory.
      </Member>
      <Member
        name="Amia Srinivasan"
        photo={profileImage.srinivasan}
        position=""
        className="advisor"
      >
        Amia Srinivasan is the Chichele Professor of Social and Political Theory at All Souls College, Oxford. Previously she was an assistant professor at St John’s College, Oxford, and a lecturer in philosophy at University College London.  She works on topics in epistemology, ethics, metaphilosophy, social and political philosophy, and feminism.
      </Member>
      <Member
        name="Andrew Janiak"
        photo={profileImage.janiak}
        position=""
        className="advisor"
      >
        Andrew Janiak is a Professor of philosophy, former Chair of the Bass Society of Fellows, and former Chair of the Department at Duke University. He is a co-leader of Project Vox, an international enterprise that seeks to recover the lost voices of women in the history of modern science and philosophy.
      </Member>
      <Member
        name="Greg Peterson"
        photo={profileImage.peterson}
        position=""
        className="advisor"
      >
        Greg Peterson is a Professor of Philosophy & Religion and Director of the Ethics Lab at South Dakota State University. His current research areas include virtue theory, political philosophy, ethics, and experimental ethics. Dr. Peterson is the recipient of numerous grants and fellowships, including from the National Science Foundation, the National Endowment for the Humanities, and the John Templeton Foundation.
        Foundation.
      </Member>
      <Member
        name="Yannik Thiem"
        photo={profileImage.thiem}
        position=""
        className="advisor"
      >
        Yannik Thiem is an Associate Professor, in the Department of Religion at Columbia University. Thiem’s research interests include gender and sexuality, religion and politics, philosophy of religion, critical theory, and queer theory. Recent work includes the book Unbecoming Subjects: Judith Butler, Moral Philosophy, and Critical Responsibility; Ripples of Redemptive Time: The Ethics and Politics of Temporality in Hermann Cohen and Walter Benjamin, and the book project in progress, Politics of Affect: Race, Religion, Sex, and Other Monsters.
      </Member>
      <Member
        name="Lori Gruen"
        photo={profileImage.gruen}
        position=""
        className="advisor"
      >
        Lori Gruen is William Griffin Professor of Philosophy, Professor of Feminist, Gender, and Sexuality Studies, and Professor of Science in Society at Wesleyan University where she also coordinates Wesleyan Animal Studies.  She is the author and editor of over a dozen books, most recently “Animal Crisis” (co-authored with Alice Crary) and “Carceral Logics” (co-edited with Justin Marceau).  As of July 1, 2022 she will serve as Chair of the APA’s Committee on the Status of Women.
      </Member>
      <br />
      <br />
      <h1>Collaborators</h1>
      <Member
        name="Jevin West"
        photo={profileImage.west}
        position=""
        className="staff"
      >
        Jevin West is an Associate Professor and director Director for the Center for an Informed Public at University of Washington. He is the Co-director of the DataLab and Co-founder and Director of the Center for an Informed Public. He studies the Science of Science and worries about the spread of misinformation. He develops knowledge discovery tools to both study and facilitate science. In particular, His is interested in the origin of scholarly disciplines and how sociological and economic factors drive and slow the evolution of science.
      </Member>
      <Member
        name="Michael Nekrasov "
        photo={profileImage.nekrasov}
        position=""
        className="staff"
      >
        Michael Nekrasov is a Researcher in Computer Science at University of Santa Barbara. He has his Ph.D. in Computer Science, and his research focuses on the filed of technologies for environmental and disaster monitoring, as well as wireless networks in challenged environments. In this project he provides technical support such as statistical analysis of large data sets, and web development.
      </Member>
      <Member
        name="Irina Artamonova "
        photo={profileImage.artamonova}
        position=""
        className="staff"
      >
        Irina Artamonova is a Statistician currently working at the Division of Global Public Health, at University of California, San Diego. Irina does research in Statistics, Public Health and Psychiatry.
      </Member>
      <Member
        name="Katrina England"
        photo={profileImage.england}
        position=""
        className="student"
      >
        Katrina England is a PhD candidate in Philosophy at Binghamton University. She developed the Critical Thinking Lba to train seniors to help other students in writing different analytical projects. She has instructed and served as a teaching assistant in many different classes during her time at Binghamton.

      </Member>
      <Member
        name="Zayna Hustoft"
        photo={profileImage.hustoft}
        position=""
        className="other"
      >
        Zyna Hustoft is an undergraduate Psychology major at South Dakota State
        University. She works at the Ethics Lab, her research is focused on
        facial trustworthiness and self-perceptions of leadership.
      </Member>
      <Member
        name="Jenn Dum"
        photo={profileImage.dum}
        position=""
        className="student"
      >
        Jenn Dum has a PhD in Philosophy from Binghamton University. She now works as an LSAT Test Developer on the Law School Admission Council. While at Binghamton, her research interests included Social and Political Philosophy, Applied Ethics, and Philosophy of Education.
      </Member>
      <Member
        name=" Aaron Schultz"
        photo={profileImage.schultz}
        position=""
        className="student"
      >
        Aaron Schultz is a PhD candidate in Philosophy at Binghamton University. He also works as an instructor at Binghamton University. He is primarily interested in Buddhist ethics, Buddhist meditation practices, and Metaethics. Before discovering his passion for philosophy, Aaron studied film and video production at Grand Valley State University. He also holds an MA in philosophy from Kent State University.
      </Member>
      <Member
        name="Junyi Dong"
        photo={profileImage.dong}
        position=""
        className="student"
      >
        Junyi Dong is an Assistant Professor in the Math Department at St Ambrose College. She earned her PhD in Mathematics at Binghamton University.
      </Member>
      <Member
        name="Morgan Thompson"
        photo={profileImage.thompson}
        position=""
        className="student"
      >
        Morgan Thompson is a Postdoctoral Fellow at Bielefeld University. She earned her PhD in the Department of History and Philosophy of Science at the University of Pittsburgh. Her work focuses on social and political values in science, public trust in science, and philosophy in science. She also has research interests in the causes of underrepresentation of various groups in philosophy and potential interventions to improve philosophy's climate for members of those groups.
      </Member>
      <Member
        name="Mark Fortney"
        photo={profileImage.fortney}
        position=""
        className="student"
      >
        Mark Fortney is an Assistant Professor in Philosophy at the University of Toronto, where he earned in PhD in Philosophy. His research focuses on attention and what makes it valuable for us. Similarly, he also works on philosophy of mind and cognitive science
      </Member>
      <Member
        name="Ben Bronner"
        photo={profileImage.bronner}
        position=""
        className="student"
      >
        Ben Bronner is a Teaching Assistant Professor of Strategic Management & Public Policy at the George Washington University School of Business (GWSB).
      </Member>
      <Member
        name="Isaac Wilhelm"
        photo={profileImage.wilhelm}
        position=""
        className="student"
      >
        Isaac Wilhelm has a PhD in Philosophy from Rutgers University. Starting in Fall 2021, he will begin working as an Assistant Professor with a presidential young professorship at the National University of Singapore. He has a B.A. in mathematics and a B.A. in film theory from the University of Chicago, and an M.A. in philosophy from Tufts University. His research is currently focused on philosophy of science and metaphysics, though he has also worked in logic, formal epistemology, and the philosophy of language.
      </Member>
      <Member
        name="Astrid Paulsson"
        photo={profileImage.paulsson}
        position=""
        className="student"
      >
        Astrid Paulsson does research on morally enhancing global institutions
        and is a senior PhD student at Charles Sturt University, former student
        at Centre for Applied Philosophy and Public Ethics (CAPPE) and former
        visiting scholar at Yale University. She wrote articles about global
        poverty in Green Left Weekly and has been teaching locally while
        finishing her PhD. Her dissertation is currently under review and the
        topic is Empathy and Global Justice.
      </Member>
      <Member
        name="Gabriel Balance"
        photo={profileImage.balance}
        position=""
        className="student"
      >
        Gabrielle recently graduated summa cum laude from the University of
        California, Santa Barbara with a BA in Philosophy and has plans to
        pursue a PhD. She is interested in normative theory, applied ethics, and
        logic.
      </Member>
      <Member
        name="Diana Dedi"
        photo={profileImage.dedi}
        position=""
        className="student"
      >
        Diana Dedi is an MBA candidate at Binghamton University. She also earned a B.A. in Philosophy, Politics, and Law in 2022 at Binghamton University. Her research interests include improving inclusivity within the philosophy discipline and finding solutions to the global access to medicines problem.
      </Member>
      <Member
        name="Natalie Pompi"
        photo={profileImage.pompi}
        position=""
        className="student"
      >
        Natalie Pompi is a 2022 graduate of the State University of NY at Binghamton who received a bachelor’s of science in Human Development. She is currently taking a gap year before pursuing a master’s degree. Her research interests include studying the experiences of people based on their intersectional identities, with a focus on men’s experiences with masculinity and patriarchal violence.
      </Member>
      <Member
        name="Lia Shaked"
        photo={profileImage.shaked}
        position=""
        className="other"
      >
        Lia Shaked is a Senior Product Designer at Questex. She was the web designer for the Global Health Impact, and hopes to find a career in the graphic design field.
      </Member>
      <Member
        name="Eric Krebs"
        photo={profileImage.krebs}
        position=""
        className="other"
      >
        Eric Krebs is currently attending Yale University, where he is pursuing a dual degree in economics and anthropology.
      </Member>
      <Member
        name="Jean Krebs"
        photo={profileImage.jkrebs}
        position=""
        className="other"
      >
        Jean Krebs is an Associate at Garfunkel Wild, P.C., and Senior Fellow at Gitenstein Institute for Health Law & Policy.
      </Member>
    </Layout>
  );
}
