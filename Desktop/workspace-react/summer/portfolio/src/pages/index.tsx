// pages/index.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import First from "@/components/first";
import TwoColumnLayout from "@/components/TwoColumnLayout";
import styles from "../styles/Home.module.css";

const Home: React.FC = () => {
  return (
    <div className="bg-cyan-200">
      <Header />
      <First title="提出課題" subtitle="高度情報工学科2年 戸巻駿" isImage />
      <h2>課題概要</h2>
      <p className="mt-5 mb-2 text-xl font-bold">
        概要： Next.jsを使用して自分自身のポートフォリオサイトを作成する
        <br />
        詳細：
        ウェブページは１ページでも複数ページでも可。コンポーネントは必ず３つ以上使用すること。スタイルの定義方法は何でも可。
        <br />
        提出物１：
        サイトのURL（推奨はVercelで公開する。Vercel以外でも可）（公開期間は評価を付けるまでで、それ以降は非公開または削除して構いません）
        <br />
        提出物２： プロジェクト
        <br />
      </p>
      <First title="Portfolio" subtitle="(ポートフォリオ)" />
      <TwoColumnLayout>
        <div className="flex flex-col flex-1 text-base leading-8">
          <p className="leading-8 text-4xl">戸巻駿のportfolio。</p>
          <br />
          <p className="text-2xl">
            ここには戸巻駿のこれまでの経歴や成果物等をまとめる。
          </p>
          <div id="one" className={styles.one}>
            <h2 className="mt-8 mb-2 text-2xl font-bold">プロフィール</h2>

            <h3 className="mt-5 mb-2 text-xl font-bold text-blue-600">
              小学生時代
            </h3>
            <p>2004年に誕生し、親の影響でゲームにハマった。</p>
            <p>
              中学年頃までは、なんとなくゲームに関係ある仕事に就きたいと考えていました。
            </p>
            <p>
              小学校６年の時の自分の将来について考える授業の中で社会人になったとき自分がどんな職業に就くか考えた時頭に浮かんだのは、ゲームクリエイターなどではなく、前に見せてもらったＳＥとして働く父でした。
            </p>
            <h3 className="mt-5 mb-2 text-xl font-bold text-blue-600">
              中学生時代
            </h3>
            <p>
              中学校では野球部に３年間所属しました。小学校の時にスポーツ少年団に所属していたので小中で約６年間野球続けました。
              小学6年生の頃には、もうSEなどのIT職に興味を持っていたので、それを目標にし進路を決めていきました。
            </p>
            <h3 className="mt-5 mb-2 text-xl font-bold text-blue-600">
              高校生時代
            </h3>
            <p>
              高校は総合学科の高校へ進み約６年続けた野球を辞め、演劇部に入部しました。
            </p>
            <p>
              高校の時に演劇部に入部したおかげで、人前で何か行動を起こすことに恥ずかしがる事が前よりずっと少なくなったと思います。
            </p>
            <p>その他に簿記や原価計算などの検定勉強に取り組みました。</p>
          </div>

          <div id="two" className={styles.two}>
            <h1 className="mt-10 mb-9 text-6xl">成果物</h1>
            <p>ここでは私が今まで作成してきたものをまとめる。</p>
            <div className="">
              <p className="mt-5 mb-2 text-xl font-bold">HTMLの最終課題</p>
              <a
                href="https://github.com/shun417jp/html-task/tree/main/saishu"
                className="hover:text-red-500"
              >
                GitHub
              </a>
            </div>
            <div className="">
              <p className="mt-5 mb-2 text-xl font-bold">
                グループ開発でのWebページ
              </p>
              <a
                href="https://naitou033.github.io/teamE/"
                className="hover:text-red-500"
              >
                Webページ
              </a>
              <a
                href="https://github.com/naitou033/teamE"
                className="hover:text-red-500"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="bg-red-200 p-4">
          <a href="#one">・プロフィール</a>
          <br />
          <a href="#two">・成果物</a>
        </div>
      </TwoColumnLayout>

      <Footer />
    </div>
  );
};

export default Home;
