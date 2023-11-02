"use strict";

/*
 * function formatCommandLine(line, prevWasComment)
 *
 * @param string line
 * @param bool prevWasComment
 *
 * @return string formattedLine
 */
function formatCommandLine(line, prevWasComment)
{
    var replaceStr = prevWasComment ? " *" : "/*";

    if (line.length) return line.replace("//", replaceStr);
    else return line.concat(replaceStr);
}

/*
 * function formatVarLine(line)
 *
 * @param string line
 *
 * @return string formattedLine
 */
function formatVarLine(line)
{
    return line.replace(" !default", "");
}

/*
 * function isCommentLine(line)
 *
 * @param string line
 * @param bool prevWasComment
 *
 * @return bool isComment
 */
function isCommentLine(line, prevWasComment)
{
    var isComment = line.startsWith("//");

    if (!line.length && prevWasComment) isComment = true;

    return isComment;
}

/*
 * function markCommentEnd(line)
 *
 * @param string line
 *
 * @return string lineWithCommentEnd
 */
function markCommentEnd(line)
{
    if (line === " *") return line.concat("/");
    else if (!line.length) return line.concat(" */");
    else return line.concat("\n */");
}

/*
 * function getLines()
 *
 * @return array lines
 */
function getLines()
{
    var fs = require("fs");

    try
    {
        var data    =   fs.readFileSync(
                            "./bootstrap-4.6.2/scss/_variables.scss", "utf8"
                        ),
            lines   =   data.toString().split(/\r?\n/);

        return lines;
    }
    catch(err)
    {
        console.log('Error:', err.stack);
        return [];
    }
}

/*
 * function writeLines(lines, outfilename)
 *
 * @param array lines
 * @param string outfilename
 *
 * @return bool success
 */
function writeLines(lines, outfilename)
{
    var fs = require("fs");

    try
    {
        var file = fs.createWriteStream(outfilename);

        file.setDefaultEncoding("utf8");

        lines.forEach(
            function(line)
            {
                file.write(line + '\n');
            }
        );

        file.end();

        return true;
    }
    catch (err)
    {
        console.log('Error:', err.stack);
        return false;
    }
}

/*
 * function main()
 *
 * @param int argc
 * @param array argv
 * @return int exitcode
 */
function main(argc, argv)
{
    var lines   = getLines(),
        len     = lines.length;

    if (!len) return 1;

    var prevWasComment  = false;

    for (let i = 0; i < len; i++)
    {
        let line = lines[i];

        if (isCommentLine(line, prevWasComment))
        {
            lines[i] = formatCommandLine(line, prevWasComment);
            prevWasComment = true;
        }
        else
        {
            lines[i] = formatVarLine(line);

            if (prevWasComment && i)
            {
                lines[i-1] = markCommentEnd(lines[i-1]);
            }

            prevWasComment = false;
        }
    }

    if (writeLines(lines, "./build/scss/_variables.scss")) return 0;
    else return 1;
}

main(process.argv.length, process.argv);
