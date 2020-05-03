// Model object from MongoDB and server


export interface OncallDto {
    '_id':String,
    'SNo':Number,
    'ReportedDateTime':Date,
    'IA': String,
    'IR': String,
    'Severity': String,
    'FunctionalArea': String,
    'ReportedBy': String,
    'ProblemReported': String,
    'RootCause': String,
    'ActionResolutionWorkaround': String,
    'LongTermSolutionNeeded': String,
    'RedirectedtoOtherTeams': String,
    'Timetakentoresolvetheproblem': String,
    'Team': String
}
  