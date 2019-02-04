import SparkMD5 from "spark-md5";
/**
 * Generates a MD5 checksum for a chunk
 * 
 * @param {Chunk} fileblob
 * @return {String}
 */


export default function checksum(chunk, callback) {
    // Instatiate filereader objects
    let fl = new FileReader();

    // Append fileblob to array buffer
    fl.readAsArrayBuffer(chunk);

    // Inject callback
    fl.onloadend = function () {
        return callback(SparkMD5.ArrayBuffer.hash(fl.result))
    };

}
