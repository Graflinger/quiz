// Questions database
// To add or remove questions, simply modify this array
// Each question should have:
// - category: the category/topic of the question
// - question: the question text
// - answers: array of possible answers
// - correctAnswers: array of indices (0-based) of the correct answers in the answers array
//   Use an array even for single correct answers, e.g., [2] for one answer or [0, 2] for multiple

const questions = [
    // A. Grundlagen & Allgemeines Recht
    {
        category: "Grundlagen & Allgemeines Recht",
        question: "Wie lautet der Slogan der bayerischen Justiz?",
        answers: [
            "Justiz ist für die Menschen da",
            "Ihre Klage - unser Urteil",
            "Im Namen des Volkes",
            "Justitia ist blind, aber wir sehen sehr genau hin"
        ],
        correctAnswers: [0]
    },
    {
        category: "Grundlagen & Allgemeines Recht",
        question: "Welches ist die höchste Instanz in Straf- und Zivilsachen?",
        answers: [
            "Staatsgerichtshof",
            "Bundesgerichtshof",
            "Bayerisches Oberlandesgericht",
            "Königlich bayerisches Amtsgericht"
        ],
        correctAnswers: [1, 2]
    },
    {
        category: "Grundlagen & Allgemeines Recht",
        question: "Was bedeutet \"Berufung\" im Recht?",
        answers: [
            "Der Beginn eines Prozesses",
            "Die Ablehnung eines Anwalts",
            "Die erneute Prüfung eines Urteils durch ein höheres Gericht",
            "Die Aussetzung einer Strafe"
        ],
        correctAnswers: [2]
    },
    {
        category: "Grundlagen & Allgemeines Recht",
        question: "Wer trägt welche Robe?",
        answers: [
            "Richter – Satinbesatz",
            "Rechtsanwalt – Satinbesatz",
            "Richter – Samtbesatz",
            "Justizangestellte – Robe ohne Besatz"
        ],
        correctAnswers: [1, 2, 3]
    },
    {
        category: "Grundlagen & Allgemeines Recht",
        question: "Wie viele Richter sind mindestens an einem erstinstanzlichen Strafprozess vor dem Landgericht beteiligt?",
        answers: [
            "1 Berufsrichter und 2 Schöffen",
            "3 Berufsrichter und 2 Schöffen",
            "5 Richter",
            "2 Berufsrichter und 2 Schöffen"
        ],
        correctAnswers: [3]
    },

    // B. Justizberufe & Aufgaben
    {
        category: "Justizberufe & Aufgaben",
        question: "Was ist die Hauptaufgabe der Staatsanwaltschaft?",
        answers: [
            "Gesetze zu erlassen",
            "Straftaten zu verfolgen und Anklage zu erheben",
            "Urteile zu fällen",
            "Rechtsberatung anzubieten"
        ],
        correctAnswers: [1]
    },
    {
        category: "Justizberufe & Aufgaben",
        question: "Wie lange dauert die reguläre Amtszeit eines Rechtspflegers in Bayern?",
        answers: [
            "5 Jahre",
            "12 Jahre",
            "25 Jahre",
            "Unbefristet, bis zur Pensionierung"
        ],
        correctAnswers: [3]
    },
    {
        category: "Justizberufe & Aufgaben",
        question: "Wo findet der theoretische Teil des dualen Studiums der Rechtspfleger statt?",
        answers: [
            "Starnberg",
            "Bamberg",
            "Straubing",
            "Kempten"
        ],
        correctAnswers: [0]
    },
    {
        category: "Justizberufe & Aufgaben",
        question: "In welchem Bereich der Justiz sind Justizfachwirte hauptsächlich tätig?",
        answers: [
            "Strafvollzug und Haftanstalten",
            "Gerichtliche Verwaltung und Geschäftsstellen",
            "Polizeiinspektionen",
            "Rechtsanwaltskanzleien"
        ],
        correctAnswers: [1]
    },
    {
        category: "Justizberufe & Aufgaben",
        question: "Was macht ein Justizwachtmeister hauptsächlich?",
        answers: [
            "Er führt Verhandlungen vor Gericht",
            "Er sorgt für Sicherheit im Gericht, begleitet Verfahrensbeteiligte, sorgt für den Aktenumlauf und führt Vollstreckungsmaßnahmen durch",
            "Er entscheidet über Rechtsmittel",
            "Er schreibt Urteile"
        ],
        correctAnswers: [1]
    },
    {
        category: "Justizberufe & Aufgaben",
        question: "Wie heißt der Beruf der Beamten in der zweiten Qualifikationsebene korrekt?",
        answers: [
            "Justizschreiber",
            "Justizfachwirt",
            "Justizkaufmann/-frau",
            "Justizanalyst"
        ],
        correctAnswers: [1]
    },
    {
        category: "Justizberufe & Aufgaben",
        question: "Welcher dieser Berufe ist KEIN Teil der ordentlichen Gerichtsbarkeit?",
        answers: [
            "Richter",
            "Staatsanwalt",
            "Notar",
            "Rechtspfleger"
        ],
        correctAnswers: [2]
    },
    {
        category: "Justizberufe & Aufgaben",
        question: "Was ist KEINE Aufgabe eines Richters?",
        answers: [
            "Leitung einer Strafsitzung",
            "Anordnung einer (rechtlichen) Betreuung",
            "Erteilung des Zuschlags in der Zwangsversteigerung",
            "Eröffnung eines Haftbefehls"
        ],
        correctAnswers: [2]
    },
    {
        category: "Justizberufe & Aufgaben",
        question: "In welcher Situation darf ein Schöffe von seinem Amt zurücktreten?",
        answers: [
            "Wenn ihm der Fall moralisch unangenehm ist",
            "Wenn der Schöffe dauerhaft verhindert (z.B. länger krank) ist",
            "Wenn der Schöffe keine weitere Motivation zur Amtsausübung aufbringen kann",
            "Wenn der Schöffe aus beruflichen Gründen anonym bleiben möchte"
        ],
        correctAnswers: [1]
    },
    {
        category: "Justizberufe & Aufgaben",
        question: "Wer sitzt bei Strafsitzungen neben dem Richter und notiert die Aussagen?",
        answers: [
            "Justizwachtmeister",
            "Justizfachwirt",
            "Bürokauffrau",
            "Justizvollzugsbeamter"
        ],
        correctAnswers: [1]
    },

    // C. Strafrecht & Jugendstrafrecht
    {
        category: "Strafrecht & Jugendstrafrecht",
        question: "Was ist die Hauptaufgabe der Bewährungshilfe?",
        answers: [
            "Entscheidungen über Haft und Strafe zu treffen",
            "Straftäter bei der Wiedereingliederung in die Gesellschaft zu unterstützen",
            "Der Polizei und Staatsanwaltschaft bei Ermittlungen zu helfen",
            "Personen in Haftanstalten zu betreuen"
        ],
        correctAnswers: [1]
    },
    {
        category: "Strafrecht & Jugendstrafrecht",
        question: "Ab welchem Alter ist eine Person schuldfähig?",
        answers: [
            "14",
            "18",
            "7",
            "21"
        ],
        correctAnswers: [0]
    },
    {
        category: "Strafrecht & Jugendstrafrecht",
        question: "Für welche Straftäter ist das JGG anzuwenden?",
        answers: [
            "Für Junggebliebene",
            "Für 7 bis 18 Jährige",
            "Für Jugendliche und Heranwachsende",
            "Nur für Jugendliche"
        ],
        correctAnswers: [2]
    },
    {
        category: "Strafrecht & Jugendstrafrecht",
        question: "Was ist das Ziel der Jugendgerichtshilfe?",
        answers: [
            "Jugendliche in Haft zu nehmen",
            "Unterstützung des Gerichts durch Bericht über die familiären und sozialen Verhältnisse der Jugendlichen",
            "Eltern zu bestrafen",
            "Zeugenaussagen zu verhindern"
        ],
        correctAnswers: [1]
    },
    {
        category: "Strafrecht & Jugendstrafrecht",
        question: "Welche Strafe kann im Jugendstrafrecht verhängt werden?",
        answers: [
            "Höchstens 6 Monate Gefängnis",
            "Erziehungsmaßregeln und Jugendstrafe bis zu 10 Jahren, ausnahmsweise bis zu 15 Jahren",
            "Nur Geldstrafen",
            "Lebenslange Haftstrafe"
        ],
        correctAnswers: [1]
    },
    {
        category: "Strafrecht & Jugendstrafrecht",
        question: "Was ist der Unterschied zwischen Mord und Totschlag?",
        answers: [
            "Mord ist geplant, Totschlag im Affekt",
            "Bei Mord müssen Mordmerkmale verwirklicht sein, z.B. Habgier, Heimtücke",
            "Mord ist vorsätzlich, Totschlag fahrlässig",
            "Mord wird grundsätzlich mit lebenslanger Freiheitsstrafe bestraft, Totschlag mit Freiheitsstrafe nicht unter fünf Jahren"
        ],
        correctAnswers: [1, 3]
    },
    {
        category: "Strafrecht & Jugendstrafrecht",
        question: "Wie lange muss man in Deutschland im Gefängnis bleiben, wenn man zu einer lebenslangen Freiheitsstrafe verurteilt wurde?",
        answers: [
            "15 Jahre",
            "20 Jahre",
            "Lebenslang bedeutet mindestens 15 Jahre Haft, danach kann eine Prüfung zur Entlassung erfolgen",
            "Lebenslang bedeutet bis zum Tod ohne Möglichkeit auf Entlassung"
        ],
        correctAnswers: [2]
    },
    {
        category: "Strafrecht & Jugendstrafrecht",
        question: "Ab wie viel Promille ist man absolut fahruntüchtig im Straßenverkehr?",
        answers: [
            "0,5 Promille",
            "0,0 Promille, wenn man fährt \"wie ein Besoffener\"",
            "1,1 Promille beim Kfz",
            "1,6 Promille beim Fahrrad"
        ],
        correctAnswers: [2, 3]
    },
    {
        category: "Strafrecht & Jugendstrafrecht",
        question: "Welche Promillegrenzen gelten für E-Scooter?",
        answers: [
            "Die Grenzen für Fußgänger",
            "Die Grenzen für Kfz-Fahrer",
            "Die Grenzen für Radfahrer",
            "Keine"
        ],
        correctAnswers: [1]
    },

    // D. Zivilrecht
    {
        category: "Zivilrecht",
        question: "Was versteht man unter \"Zivilrecht\"?",
        answers: [
            "Das Recht, das staatliche Angelegenheiten regelt",
            "Das Recht, das Streitigkeiten zwischen Privatpersonen oder Unternehmen regelt",
            "Das Strafrecht",
            "Das Verwaltungsrecht"
        ],
        correctAnswers: [1]
    },
    {
        category: "Zivilrecht",
        question: "Was ist eine \"Güteverhandlung\"?",
        answers: [
            "Ein Prozess vor dem Strafgericht",
            "Ein Termin vor dem Zivilgericht, um eine Einigung zu erzielen",
            "Eine öffentliche Gerichtsverhandlung",
            "Ein Verfahren zur Strafzumessung"
        ],
        correctAnswers: [1, 2]
    },

    // E. Nachlassgericht
    {
        category: "Nachlassgericht",
        question: "Wofür ist das Nachlassgericht zuständig?",
        answers: [
            "Für Scheidungen und Sorgerechtsfragen",
            "Für die Regelung von Erbschaften und Testamenten",
            "Für Strafverfahren nach Erbrecht",
            "Für die Anmeldung von Insolvenzen"
        ],
        correctAnswers: [1]
    },
    {
        category: "Nachlassgericht",
        question: "Was versteht man unter \"Testamentsvollstreckung\"?",
        answers: [
            "Die Anfechtung eines Testaments",
            "Die Verwaltung und Verteilung des Nachlasses durch eine beauftragte Person nach dem Testament",
            "Die öffentliche Bekanntgabe des Testaments",
            "Die Eröffnung des Testaments beim Familiengericht"
        ],
        correctAnswers: [1]
    },
    {
        category: "Nachlassgericht",
        question: "Welches Testament ist wirksam?",
        answers: [
            "Eigenhändig geschrieben und unterschrieben",
            "Handschriftlich unterschrieben",
            "Mündlich vor 3 Zeugen und Erblasser in Todesgefahr",
            "Mündliche Erklärung des Erblassers vor 3 Zeugen auf hoher See"
        ],
        correctAnswers: [0, 2, 3]
    },

    // F. Familiengericht
    {
        category: "Familiengericht",
        question: "Wer kann vor dem Familiengericht das Sorgerecht für ein Kind beantragen?",
        answers: [
            "Nur die Eltern",
            "Eltern, Verwandte oder das Jugendamt, wenn das Kindeswohl gefährdet ist",
            "Nur das Jugendamt",
            "Nur das Gericht selbst"
        ],
        correctAnswers: [1]
    },
    {
        category: "Familiengericht",
        question: "Was kann das Familiengericht im Falle einer Scheidung anordnen?",
        answers: [
            "Nur die Aufteilung des Vermögens",
            "Die Regelung von Unterhalt, Umgangsrecht und Sorgerecht",
            "Die Verurteilung eines Elternteils",
            "Die Schließung des Nachlassgerichts"
        ],
        correctAnswers: [1]
    },

    // G. Die Justiz in Regensburg
    {
        category: "Die Justiz in Regensburg",
        question: "Zu welchem Oberlandesgerichtsbezirk gehört Regensburg?",
        answers: [
            "Augsburg",
            "München",
            "Nürnberg",
            "Bamberg"
        ],
        correctAnswers: [2]
    },
    {
        category: "Die Justiz in Regensburg",
        question: "Wie heißt der Präsident des Landgerichts Regensburg?",
        answers: [
            "Huber",
            "Meier",
            "Ziegler",
            "Müller"
        ],
        correctAnswers: [0]
    },
    {
        category: "Die Justiz in Regensburg",
        question: "Welche Amtsbezeichnung führt der Behördenleiter der Staatsanwaltschaft Regensburg?",
        answers: [
            "Direktor",
            "Präsident",
            "Vorsitzender Staatsanwalt",
            "Leitender Oberstaatsanwalt"
        ],
        correctAnswers: [3]
    },
    {
        category: "Die Justiz in Regensburg",
        question: "Wie viele Personen arbeiten in den Justizgebäuden am Dörnbergpark in Regensburg?",
        answers: [
            "50-100",
            "350-400",
            "500-550",
            "700-750"
        ],
        correctAnswers: [2]
    }
];
