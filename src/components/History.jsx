import "../styles/History.css";
import utopia from "../assets/images/utopia.png";
// Pastikan file CSS diimpor
import Firstimpact from "../assets/images/Album/First_Impact.png";
import Doublast from "../assets/images/Album/Doublast.png";
import Troubleshooter from "../assets/images/Album/Troubleshooter.png";
import MagicHour from "../assets/images/Album/Magic_Hour.png";
import LoveStruck from "../assets/images/Album/LoveStruck.png";
import Kep1going from "../assets/images/Album/Kep1going.png";
import Tiptap from "../assets/images/Album/Tip_Tap.png";
import against from "../assets/images/Album/against.jpg";
import jepang from "../assets/images/Album/jepang.jpg";
import keep from "../assets/images/Album/keep2.webp";

// Data untuk semua 9 album
const albums = [
  {
    year: "2022",
    title: "First Impact",
    image: Firstimpact,
  },
  {
    year: "2022",
    title: "Doublast",
    image: Doublast,
  },
  {
    year: "2022",
    title: "TroubleShooter",
    image: Troubleshooter,
  },
  {
    year: "2023",
    title: "Magic Hour",
    image: MagicHour,
  },
  {
    year: "2023",
    title: "Love Struck",
    image: LoveStruck,
  },
  {
    year: "2024",
    title: "Kep1going",
    image: Kep1going,
  },
  {
    year: "2024",
    title: "Tipi Tap",
    image: Tiptap,
  },
  {
    year: "2025",
    title: "Against the World",
    image: against,
  },
  {
    year: "2025",
    title: "?",
    image: "https://placehold.co/500x700/ab81db/FFFFFF?text=?",
  },
];

// Mengelompokkan album berdasarkan tahun
const albumsByYear = albums.reduce((acc, album) => {
  (acc[album.year] = acc[album.year] || []).push(album);
  return acc;
}, {});

const History = () => {
  return (
    <div className="history-page">
      <div className="history-header">
        <h1>Our Journey</h1>
      </div>

      <div className="timeline">
        {/* Item 1: Trainee */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-date">2020</div>
            <h3>The Beginning</h3>
            <p>
              Para trainee wanita yang berasal dari Korea, Tiongkok, dan Jepang
              berkompetisi dalam acara realitas Mnet, "Girls Planet 999," dengan
              tujuan untuk debut dalam sebuah girl group. Pada siaran langsung
              terakhir tanggal 22 Oktober 2021, sembilan kontestan dengan
              peringkat teratas diumumkan sebagai anggota grup produk acara
              tersebut, Kep1er.
            </p>
          </div>
        </div>

        {/* Item 2: Debut */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-date">2021</div>
            <h3>Official Debut</h3>
            <p>
              Kemudian pada tanggal 29 November 2021, diumumkan bahwa mereka
              akan debut dengan mini album pertama mereka, First Impact.
            </p>
          </div>
        </div>

        {/* Item 3: Album 2022 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-date">2022</div>
            <h3>Album Releases</h3>
            <div className="album-group">
              {albumsByYear["2022"].map((album) => (
                <div key={album.title} className="album-item">
                  <img src={album.image} alt={album.title} />
                  <h4>{album.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Item 4: Album 2023 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-date">2023</div>
            <h3>Album Releases</h3>
            <div className="album-group">
              {albumsByYear["2023"].map((album) => (
                <div key={album.title} className="album-item">
                  <img src={album.image} alt={album.title} />
                  <h4>{album.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Item 5: Album 2024 (SEBELUM "A New Chapter") */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-date">2024</div>
            <h3>Album Releases</h3>
            <div className="album-group">
              {albumsByYear["2024"].map((album) => (
                <div key={album.title} className="album-item">
                  <img src={album.image} alt={album.title} />
                  <h4>{album.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Item 6: Perubahan Formasi ("A New Chapter") */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-date">2024</div>
            <h3>A New Chapter</h3>
            <p>
              Pada tanggal 30 Mei, diumumkan bahwa para anggota, kecuali Mashiro
              dan Yeseo, telah memperbarui kontrak mereka dengan WAKEONE.
              Keduanya akan meninggalkan grup setelah konser Jepang Kep1er
              mendatang pada bulan Juli.
            </p>
          </div>
        </div>

        {/* Item 7: Album 2025 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-date">2025</div>
            <h3>Album Releases</h3>
            <div className="album-group">
              {albumsByYear["2025"].map((album) => (
                <div key={album.title} className="album-item">
                  <img src={album.image} alt={album.title} />
                  <h4>{album.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Item 8: Konser Pertama */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content concert-card">
            <img className="concert-image" src={jepang} alt="Genesis Tour" />
            <div className="concert-info">
              <div className="timeline-date">2025</div>
              <h3>Japan concert : "FLY-BY"</h3>
              <p>
                Pada tanggal 14 Februari, sebuah poster yang tersebar di media
                sosial Jepang mengumumkan bahwa grup tersebut akan mengadakan
                tur Jepang pertama mereka, bertajuk Kep1er Japan Concert Tour
                2023 'Fly-By', mulai tanggal 20 Mei hingga 11 Juni
              </p>
            </div>
          </div>
        </div>

        {/* Item 9: Konser Kedua */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content concert-card">
            <img className="concert-image" src={keep} alt="Utopia Tour" />
            <div className="concert-info">
              <div className="timeline-date">2025</div>
              <h3>KEEP Goin ON concert</h3>
              <p>
                Konser "Kep1going ON" adalah sebuah perayaan perjalanan luar
                biasa Kep1er bersama para Kep1ian. Lebih dari sekadar
                pertunjukan, konser ini menjadi panggung di mana energi dahsyat
                dari lagu-lagu hits seperti "WA DA DA" dan "Shooting Star"
                berpadu dengan momen emosional yang tak terlupakan. Ini adalah
                bukti ikatan kuat antara Kep1er dan penggemar, sebuah janji
                untuk terus melangkah maju, dan kenangan berharga yang akan
                selalu bersinar terang.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
